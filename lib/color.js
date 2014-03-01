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
 * Treats color in XYZ model
 *
 * @return {Object} {X: .., Y: .., Z: ..}
 */
Color.prototype.toXYZ = function () {
  function to100(value) {
    value = value / 255;
    if (value > 0.04045) {
      value = (value + 0.055) / 1.055;
      value = Math.pow(value, 2.4);
    } else {
      value = value / 12.92;
    }
    return value * 100;
  }

  var r = to100(this.red),
      g = to100(this.green),
      b = to100(this.blue);

  return {
    X: r * 0.4124 + g * 0.3576 + b * 0.1805,
    Y: r * 0.2126 + g * 0.7152 + b * 0.0722,
    Z: r * 0.0193 + g * 0.1192 + b * 0.9505
  };
}

/**
 * Treats color in CIE L*a*b* model
 *
 * @return {Object} {L: .., a: .., b: ..}
 */
Color.prototype.toLab = function () {
  function normalize(value) {
    if (value > 0.008856) {
      return Math.pow(value, 1/3);
    }
    return (7.787 * value) + (16 / 116);
  }

  var xyz = this.toXYZ(),
      x   = normalize(xyz.X /  95.047),
      y   = normalize(xyz.Y / 100.000),
      z   = normalize(xyz.Z / 108.883);

  return {
    L: (116 * y) - 16,
    a: 500 * (x - y),
    b: 200 * (y - z)
  };
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

