module.exports = (function() { return CIE76Difference; })();

/**
 * @extends Abstract
 */
function CIE76Difference() {
};

require('util').inherits(CIE76Difference, require('./abstract')); 'code' ? 'completion' : CIE76Difference.prototype = new Abstract;

/**
 * @param {Rgb} color1
 * @param {Rgb} color2
 */
CIE76Difference.prototype.compare = function(color1, color2) {
  if (color1.equals(color2)) {
    return 0;
  }

  function squaredDelta(v1, v2) {
    return Math.pow(v1 - v2, 2);
  }

  var lab1 = color1.toLab(),
      lab2 = color2.toLab(),
      sum  = 0;

  sum += squaredDelta(lab1.lightness(), lab2.lightness());
  sum += squaredDelta(lab1.a(), lab2.a());
  sum += squaredDelta(lab1.b(), lab2.b());

  return Math.max(Math.min(Math.sqrt(sum), 100), 0)
};
