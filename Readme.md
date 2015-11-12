# babel-preset-es2015-node5

> Babel preset to make node@5 ES2015 compatible.

Node@5 has great [ES2015 support](https://nodejs.org/en/docs/es6/),
this module just adds missing features:
- destructing assignment
- rest & default parameters
- modules
- unicode & sticky regular expressions
- better function name support

## Install

```sh
$ npm install --save-dev babel-preset-es2015-node5
```

## Usage

### Via `.babelrc` (recommended)

**.babelrc**

```json
{
  "presets": ["es2015-node5"]
}
```

### Via CLI

```sh
$ babel script.js --preset es2015-node5
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  presets: ['es2015-node5'],
})
```

## License

[MIT](./LICENSE)
