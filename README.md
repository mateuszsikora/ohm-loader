# ohm-loader

[![Build Status](https://travis-ci.org/mateuszsikora/ohm-loader.svg?branch=master)](https://travis-ci.org/mateuszsikora/ohm-loader)
[![dependencies Status](https://david-dm.org/mateuszsikora/ohm-loader/status.svg)](https://david-dm.org/mateuszsikora/ohm-loader)

[Ohm](https://github.com/harc/ohm) loader for webpack

## Installation

`npm install --save-dev ohm-loader`

## Usage

**webpack.config.js**
```javascript
{
  module: {
    rules: [{
      test: /\.ohm$/,
      loader: 'ohm-loader'
    }]
  }
}
```

**file.js**
```javascript
import grammar from 'file.ohm'
grammar.match(...);
```
