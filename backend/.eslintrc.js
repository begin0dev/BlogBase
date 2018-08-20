module.exports = {
  "extends": "airbnb-base",
  "settings": {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  "rules": {
    "import/prefer-default-export": 0,
    "no-console": 0,
    "consistent-return": 0,
    "arrow-body-style": 0,
    "object-property-newline": 0,
    "object-curly-newline": 0,
    "no-underscore-dangle": [
      "error",
      {
        "allow": [
          "_id"
        ]
      }
    ],
  },
};