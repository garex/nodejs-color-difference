# Color difference

Calculate difference between two colors from 0 (same) to 100 (white/black).

## Usage

    var cd = require('color-difference');
    cd.compare('#ffffff', '#ffffff'); //    0
    cd.compare('#ffffff', '#000000'); // ~100.000
    cd.compare('#ffffff', '#7f7f7f'); //  ~46.807
    cd.compare('#000000', '#808080'); //  ~53.585
    cd.compare('#7f7f7f', '#808080'); //   ~0.392
