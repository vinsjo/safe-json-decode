# safe-json-decode

`safe-json-decode` is a minimal package for encoding and decoding json without unhandled exceptions being thrown on failure

Package is bundled using [microbundle](https://www.npmjs.com/package/microbundle)

## Installation

`npm i safe-json-decode`

### In Node.js

```js
// ESM:
import { decode, encode } from 'safe-json-decode';
// CommonJS:
const { decode, encode } = require('safe-json-decode');
// or:
const safeJSON = require('safe-json-decode');
```

## Usage

```js
decode('{"foo": "bar"}');
// => {foo: 'bar'}
decode('{invalidJson}');
// => null
encode({ foo: 'bar' });
// => '{"foo": "bar"}'
```
