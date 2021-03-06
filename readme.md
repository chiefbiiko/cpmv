# cpmv

[![build status](http://img.shields.io/travis/chiefbiiko/cpmv.svg?style=flat)](http://travis-ci.org/chiefbiiko/cpmv) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/chiefbiiko/cpmv?branch=master&svg=true)](https://ci.appveyor.com/project/chiefbiiko/cpmv)

***

## Get it!

`npm install --save chiefbiiko/cpmv`

***

## Usage

``` js
var { cp, mv } = require('cpmv')

// cp and mv have the same API
mv(__filename, __filename + '_moved', function (err) {
  if (err) return console.error(err)
  console.log('moved!')
})
```

***

## API

### `cp(from, to[, cb(err)])`

Copy a file or directory.

### `mv(from, to[, cb(err)])`

Move a file or directory.

***

## License

[MIT](./license.md)