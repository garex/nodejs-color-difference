# Color difference

Helps you to know the difference between two colors.

## Install

    npm install color-difference

## Usage

    var cd = require('../nodejs-color-difference');
    console.log(cd.compare('#ffffff', '#ffffff')); //   0
    console.log(cd.compare('#ffffff', '#000000')); // 100
    console.log(cd.compare('#ffffff', '#7f7f7f')); // ~50.196
    console.log(cd.compare('#000000', '#808080')); // ~50.196
    console.log(cd.compare('#7f7f7f', '#808080')); //  ~0.392

