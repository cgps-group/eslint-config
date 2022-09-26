module.exports = {
  "extends": [
    "plugin:react/recommended",
  ],
  "rules": {
    "no-unused-vars": [ "error", { "varsIgnorePattern": "PropTypes" }],
    "react/prefer-es6-class": 0,
    "react/prefer-stateless-function": 0,
  },
};
