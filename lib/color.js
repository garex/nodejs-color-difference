/**
 * Module exports.
 */

module.exports = Color;

function Color(){
	this.red = this.green = this.blue = null;
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

