# safe-json-decode

`safe-json-decode` is a minimal package for encoding and decoding json without unhandled exceptions being thrown on failure

Package is bundled using [microbundle](https://www.npmjs.com/package/microbundle)

## Installation

`npm i safe-json-decode`

### In Node.js

```js
// ESM:
import { json_decode, json_encode } from 'safe-json-decode';
// CommonJS:
const { json_decode, json_encode } = require('safe-json-decode');
```

## Usage

```js
json_decode('{"foo": "bar"}');
// => {foo: 'bar'}
json_encode({ foo: 'bar' });
// => '{"foo": "bar"}'
json_decode('{invalidJson}');
// => null
```
