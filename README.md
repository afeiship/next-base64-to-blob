# next-base64-to-blob
> Base64 to blob

## installation
```bash
npm install -S afeiship/next-base64-to-blob --registry=https://registry.npm.taobao.org
```

## usage
```js
const b64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmAAAABpCAYAAACd....';

const blob = nx.base64ToBlob(b64);
const urlCreator = window.URL || window.webkitURL;
const imageEl = document.getElementById('image');

imageEl.src = urlCreator.createObjectURL(blob);
```
