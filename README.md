# next-base64-to-blob
> Base64 to blob

## installation
```bash
npm install -S afeiship/next-base64-to-blob --registry=https://registry.npm.taobao.org
```

## usage
```js
var blob = nx.base64ToBlob(b64);
var urlCreator = window.URL || window.webkitURL;

document.getElementById('image').src = urlCreator.createObjectURL(blob);
```
