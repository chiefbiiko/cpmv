var fs = require('fs')
var pump = require('pump')
var pumpDir = require('pump-dir')
var rimraf = require('rimraf')

function stat (filepath, opts, cb) {
  opts && opts.dereference ? fs.stat(filepath, cb) : fs.lstat(filepath, cb)
}

function cp (from, to, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  stat(from, opts, function onstat (err, stats) {
    if (err) return cb(err)

    var pumper
    if (stats.isDirectory()) {
      pumper = pumpDir
    } else if (stats.isFile()) {
      pumper = pump
      from = fs.createReadStream(from)
      to = fs.createWriteStream(to)
    } else {
      return cb(Error('unsupported resource'))
    }

    pumper(from, to, function onpump (err) {
      if (err) return cb(err)
      cb(null)
    })

  })
}

function mv (from, to, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }
  cp(from, to, opts, function oncopy (err) {
    if (err) return cb(err)
    rimraf(from, function onrimraf (err) {
      if (err) return cb(err)
      cb(null)
    })
  })
}

module.exports = {
  cp: cp,
  mv: mv
}
