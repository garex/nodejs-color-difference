module.exports  = {
  compare       : require('./compare')
  , cliRunner   : require('./cli-runner')
  , method      : {
      'EuclideanDistance' : require('./method/euclidean-distance')
    , 'CIE76Difference'   : require('./method/cie-76-difference')
  }
};
