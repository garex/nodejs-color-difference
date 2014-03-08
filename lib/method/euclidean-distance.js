module.exports = (function() { return EuclideanDistance; })();

/**
 * @extends Abstract
 */
function EuclideanDistance() {
};

require('util').inherits(EuclideanDistance, require('./abstract')); 'code' ? 'completion' : EuclideanDistance.prototype = new Abstract;

/**
 * @param {Rgb} color1
 * @param {Rgb} color2
 */
EuclideanDistance.prototype.compare = function(color1, color2) {
  if (color1.equals(color2)) {
    return 0;
  }

  function squaredDelta(v1, v2) {
    return Math.pow(v1 - v2, 2);
  }

  var sum = 0;
  sum += squaredDelta(color1.red(),   color2.red());
  sum += squaredDelta(color1.green(), color2.green());
  sum += squaredDelta(color1.blue(),  color2.blue());

  var conversionIndex = 19.5075;

  return Math.sqrt(sum / conversionIndex);
};
