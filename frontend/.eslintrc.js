const path = require('path');

module.exports = {
  "extends": [
    "react-app",
  ],
  "settings": {
    "import/resolver": {
      node: { paths: [path.resolve('./src')] }
    },
  },
};