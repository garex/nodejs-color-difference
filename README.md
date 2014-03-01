# Color difference

Helps you to know the difference between two colors.

## Install

    npm install color-difference

## Usage

    var cd = require('../nodejs-color-difference');
    console.log(cd.compare('#ffffff', '#ffffff')); //    0
    console.log(cd.compare('#ffffff', '#000000')); // ~100.000
    console.log(cd.compare('#ffffff', '#7f7f7f')); //  ~46.807
    console.log(cd.compare('#000000', '#808080')); //  ~53.585
    console.log(cd.compare('#7f7f7f', '#808080')); //   ~0.392

