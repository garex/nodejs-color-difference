# Color difference

Calculate difference between two colors from 0 (same) to 100 (white/black).

## Usage

    var cd = require('color-difference');
    console.log(cd.compare('#ffffff', '#ffffff')); //    0
    console.log(cd.compare('#ffffff', '#000000')); // ~100.000
    console.log(cd.compare('#ffffff', '#7f7f7f')); //  ~46.807
    console.log(cd.compare('#000000', '#808080')); //  ~53.585
    console.log(cd.compare('#7f7f7f', '#808080')); //   ~0.392

