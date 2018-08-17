const path = require('path');

module.exports = {
  "extends": [
    "react-app",
    "airbnb",
  ],
  "settings": {
    "import/resolver": {
      node: { paths: [path.resolve('./src')] }
    },
  },
  "rules": {
    "react/jsx-no-bind": [
      2,
      {
        "ignoreRefs": true,
        "allowArrowFunctions": true,
      }
    ],
    "global-require": 0,
    "arrow-body-style": 0,
    "object-curly-newline": 0,
    "function-paren-newline": 0,
    "react/prop-types": 0,
    "react/jsx-wrap-multilines": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/prefer-stateless-function": 0,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "lines-between-class-members": 0,
    "operator-linebreak": 0,
  }
};
