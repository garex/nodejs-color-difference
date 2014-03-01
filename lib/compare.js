module.exports = compare;

var Color   = require('./color'),
    methods = {
        'EuclideanDistance' : require('./method/euclidean-distance')
      , 'CIE76Difference'   : require('./method/cie-76-difference')
    };

/**
 * Compares two colors and returns difference from 1 to 100
 *
 * @param {String|Color} color1
 * @param {String|Color} color2
 * @param {String} method Default method is best from currently implemented
 * @return {Integer} difference
 */
function compare(color1, color2, method) {
  var methodName = method || 'CIE76Difference';

  if (undefined === methods[methodName]) {
    throw new Error('Method "' + methodName + '" is unknown. See implemented methods in ./lib/method directory.');
  }

  var methodObj = new methods[methodName];

  return methodObj.compare(new Color(color1), new Color(color2));
}

