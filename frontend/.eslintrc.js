const path = require('path');

module.exports = {
  "settings": {
    "import/resolver": {
      node: {
        paths: [path.resolve('./src')]
      }
    },
  },
};