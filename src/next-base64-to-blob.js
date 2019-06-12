(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var MIME_RE = /:(.*?);/;
  var CHAR = ',';

  nx.base64ToBlob = function(inDataUrl) {
    var arr = inDataUrl.split(CHAR),
      mime = arr[0].match(MIME_RE)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.base64ToBlob;
  }
})();
