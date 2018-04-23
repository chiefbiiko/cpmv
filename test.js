var tape = require('tape')
var { cp, mv } = require('./index')
var { existsSync, unlink, writeFile } = require('fs')

tape.onFinish(function () {
  unlink(__filename + '_copy', function (_) {
    unlink('node_modules/mv.test', function (_) {})
  })
})

tape('cp', function (t) {
  cp(__filename, __filename + '_copy', function (err) {
    if (err) t.end(err)
    t.ok(existsSync(__filename + '_copy'), 'copied')
    t.end()
  })
})

tape('mv', function (t) {
  writeFile('mv.test', '419', function (err) {
    if (err) t.end(err)
    mv('mv.test', 'node_modules/mv.test', function (err) {
      if (err) t.end(err)
      t.ok(existsSync('node_modules/mv.test'), 'moved')
      t.notOk(existsSync('mv.test'), 'gone')
      t.end()
    })
  })
})