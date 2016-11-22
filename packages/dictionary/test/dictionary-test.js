var test = require('tape')
var dict = require('..')

var DATA = {
  'maj7': ['1P 3M 5P 7M', ['Maj7']],
  'm7': ['1P 3m 5P 7m']
}

test('dictionary: detector', function (t) {
  t.deepEqual(dict.detector(null, DATA)('E4 C4 B2 G'), [ ['maj7', 'G'] ])
  t.deepEqual(dict.detector('', DATA)('E4 C4 B2 G'), [ 'Gmaj7' ])
  t.deepEqual(dict.detector(' ', DATA)('E4 C4 B2 G'), [ 'G maj7' ])
  t.end()
})

test('dictionary: get', function (t) {
  var get = dict.get(null, DATA)
  t.deepEqual(get('maj7'), [ '1P', '3M', '5P', '7M' ])
  t.deepEqual(get('Maj7'), [ '1P', '3M', '5P', '7M' ])
  t.deepEqual(get('m7'), [ '1P', '3m', '5P', '7m' ])
  t.equal(get('blah'), undefined)
  t.end()
})

test('dictionary: keys', function (t) {
  var keys = dict.keys(DATA)
  t.deepEqual(keys(), [ 'maj7', 'm7' ])
  t.deepEqual(keys(true), [ 'maj7', 'm7', 'Maj7' ])
  t.end()
})
