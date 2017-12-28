const path = require('path');

module.exports = {
  "extends": [
    "react-app",
    "standard",
  ],
  "settings": {
    "import/resolver": {
      node: {
        paths: [path.resolve('./src')]
      }
    },
  },
  "rules": {
    "no-unused-vars": 1,
    "space-before-function-paren": 0,
    "key-spacing": 0,
    "comma-dangle": 0,
  }
};
