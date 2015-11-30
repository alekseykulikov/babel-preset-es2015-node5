# babel-preset-es2015-node5

> Babel preset to make node@5 fully ES2015 compatible.

Node@5 has great [ES2015 support](https://nodejs.org/en/docs/es6/),
this module just adds missing features:
- destructing assignment ([transform-es2015-destructuring](http://babeljs.io/docs/plugins/transform-es2015-destructuring/))
- rest & default parameters ([transform-es2015-parameters](http://babeljs.io/docs/plugins/transform-es2015-parameters/))
- modules ([transform-es2015-modules-commonjs](http://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/))
- unicode & sticky regular expressions ([transform-es2015-sticky-regex](http://babeljs.io/docs/plugins/transform-es2015-sticky-regex/) & [transform-es2015-unicode-regex](http://babeljs.io/docs/plugins/transform-es2015-unicode-regex/))
- better function name support ([transform-es2015-function-name](http://babeljs.io/docs/plugins/transform-es2015-function-name/))

## Install

    npm install --save-dev babel-preset-es2015-node5

## Usage

Read ["Configuring Babel 6" article](http://www.2ality.com/2015/11/configuring-babel6.html)
for more information about babel@6 configuration.

### Via `.babelrc` (recommended)

**.babelrc**

```json
{
  "presets": ["es2015-node5"]
}
```

### Via CLI

    babel script.js --preset es2015-node5

### Via Node API

```js
require('babel-core').transform('code', {
  presets: ['es2015-node5'],
})
```

## License

[MIT](./LICENSE)
