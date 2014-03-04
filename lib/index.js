module.exports  = {
  compare       : require('./compare')
  , method      : {
      'EuclideanDistance' : require('./method/euclidean-distance')
    , 'CIE76Difference'   : require('./method/cie-76-difference')
  }
};
