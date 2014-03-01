/**
 * Module exports.
 */

module.exports = Color;

function Color(r, g, b){
	this.red = this.green = this.blue = null;
	if (3 == arguments.length) {
		this.setRGB(r, g, b);
	} else if (1 == arguments.length && this.isHEX(arguments[0])) {
		this.parseHEX(arguments[0]);
	}
}

/**
 * Set color values from RGB
 * @param {Integer} red
 * @param {Integer} green
 * @param {Integer} blue
 * @return {Color} self
 */
Color.prototype.setRGB = function (red, green, blue) {
	var setValue = function (value) {
		var v = parseInt(value);
		if (v < 0) {
			return 0;
		}
		if (v > 255) {
			return 255;
		}
		return v;
	};
	this.red   = setValue(red);
	this.green = setValue(green);
	this.blue  = setValue(blue);
	return this;
}

/**
 * @return {String}
 */
Color.prototype.toStringHEX = function () {
	var toHEX = function (intValue) {
		return (intValue < 16 ? '0' : '') + intValue.toString(16);
	}
	return '#' + toHEX(this.red) + toHEX(this.green) + toHEX(this.blue);
}

/**
 * @return {Boolean}
 */
Color.prototype.isHEX = function (value) {
	return true
		&& (typeof value == 'string' || value instanceof String)
		&& /^#?(?:[0-9a-f]{3}){1,2}$/i.test(value)
}

/**
 * @return {Color}
 */
Color.prototype.parseHEX = function (value) {
	var c  = '([a-f0-9]{1,2})',
			re = new RegExp('^#?' + c + c + c + '$', 'i'),
			m  = value.match(re);

	return this.setRGB(parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16));
}

/**
 * @return {String}
 */
Color.prototype.toString = function () {
	return this.toStringHEX();
}

/**
 * Create color from RGB
 * @param {Integer} red
 * @param {Integer} green
 * @param {Integer} blue
 * @return {Color} self
 */
Color.fromRGB = function (red, green, blue) {
	var c = new Color();
	return c.setRGB(red, green, blue);
}

