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
  } else if (1 == arguments.length && arguments[0] instanceof Color) {
    this.setRGB(arguments[0].red, arguments[0].green, arguments[0].blue);
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
 * @param {String} value
 * @return {Boolean}
 */
Color.prototype.isHEX = function (value) {
  return true
    && (typeof value == 'string' || value instanceof String)
    && /^#?(?:[0-9a-f]{3}){1,2}$/i.test(value)
}

/**
 * @param {String} value
 * @return {Color}
 */
Color.prototype.parseHEX = function (value) {
  var c  = '([a-f0-9]{1,2})',
      re = new RegExp('^#?' + c + c + c + '$', 'i'),
      m  = value.match(re),
      toInt = function(v) {
        if (1 == v.length) {
          v = v + v;
        }
        return parseInt(v, 16);
      };
  
  return this.setRGB(toInt(m[1]), toInt(m[2]), toInt(m[3]));
}

/**
 * @param {Color} that
 * @return {Boolean}
 */
Color.prototype.equals = function (that) {
  return this.red   == that.red
      && this.green == that.green
      && this.blue  == that.blue;
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

