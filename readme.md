# cpmv

[![build status](http://img.shields.io/travis/chiefbiiko/cpmv.svg?style=flat)](http://travis-ci.org/chiefbiiko/cpmv) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/chiefbiiko/cpmv?branch=master&svg=true)](https://ci.appveyor.com/project/chiefbiiko/cpmv)

***

## Get it!

`npm install --save cpmv`

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

### `cp(from, to[, opts][, cb])`

Copy or move a file or directory. `from` is the source, `to` the target. Calling back with  a single error parameter `cb(err)`. Options default to:

``` js
{
  dereference: false // follow symlinks?
}
```

***

## License

[MIT](./license.md)