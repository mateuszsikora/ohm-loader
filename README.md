# ohm-loader

[![Build Status](https://travis-ci.org/mateuszsikora/ohm-loader.svg?branch=master)](https://travis-ci.org/mateuszsikora/ohm-loader)

[Ohm](https://github.com/harc/ohm) loader for webpack

## Installation

`npm install ohm-loader`

## Usage

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
