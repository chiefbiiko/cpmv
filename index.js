var { createReadStream, createWriteStream, lstat } = require('fs')
var pump = require('pump')
var pumpDir = require('pump-dir')
var rimraf = require('rimraf')

function cp (from, to, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  lstat(from, function onstat (err, stats) {
    if (err) return cb(err)

    var pumper
    if (stats.isDirectory()) {
      pumper = pumpDir
    } else if (stats.isFile()) {
      pumper = pump
      from = createReadStream(from)
      to = createWriteStream(to)
    } else {
      return cb(Error('unsupported resource'))
    }

    pumper(from, to, cb)

  })
}

function mv (from, to, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }
  cp(from, to, opts, function oncopy (err) {
    if (err) return cb(err)
    rimraf(from, cb)
  })
}

module.exports = { cp, mv }
