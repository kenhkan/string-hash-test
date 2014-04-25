var _ = require('highland');
var u = require('./hash');

var size = 10000;

_(makeRandoms())

  .flatMap(function (block) {
    return block.toString().split('\n');
  })

  .map(function (line) {
    var i;

    if (line && line.length && line.length > 0) {
      return line + '\t' + u.hash(line).toString() + '\n';
    } else {
      return '\n';
    }
  })

  .pipe(process.stdout)


function makeRandoms () {
  var i, len;
  var strs = [];

  for (i = 0; i < size; i++) {
    len = Math.floor(Math.random() * 128);
    strs.push(u.makeRandom(len));
  }

  return strs;
}
