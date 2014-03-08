module.exports = (function() { return compare; })();

var HexRgb   = require('color-model').HexRgb,
    methods = {
        'EuclideanDistance' : require('./method/euclidean-distance')
      , 'CIE76Difference'   : require('./method/cie-76-difference')
    };

/**
 * Compares two colors and returns difference from 1 to 100
 *
 * @param {String} color1
 * @param {String} color2
 * @param {String} method Default method is best from currently implemented
 * @return {Number} difference
 */
function compare(color1, color2, method) {
  var methodName = method || 'CIE76Difference';

  if (undefined === methods[methodName]) {
    throw new Error('Method "' + methodName + '" is unknown. See implemented methods in ./lib/method directory.');
  }

  /** @type Abstract */
  var methodObj = new methods[methodName];

  return methodObj.compare(new HexRgb(color1), new HexRgb(color2));
};
