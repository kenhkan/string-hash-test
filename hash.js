var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

exports.hash = function (str) {
  var h = 0, i, len;
  for (i = 0, len = str.length; i < len; i++) {
    h  = ((h << 5) - h) + str.charCodeAt(i);
    h &= h;
  }
  return (h >>> 1) % 8;
};

exports.makeRandom = function (len) {
  var i;
  var text = "";

  for (i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
