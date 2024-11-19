module.exports = {
  "extends": [
    "airbnb-base",
  ],
  "rules": {
    "array-bracket-spacing": 0,
    "arrow-body-style": 0,
    "arrow-parens": [ "error", "always" ],
    "brace-style": [ "error", "stroustrup" ],
    "comma-dangle": [ "error", { "arrays": "always-multiline", "objects": "always-multiline", "imports": "always-multiline", "exports": "always-multiline", "functions": "ignore" } ],
    "default-case": 0,
    "dot-notation": 0,
    "func-names": 0,
    "function-paren-newline": 0,
    "global-require": 0,
    "implicit-arrow-linebreak": 0,
    "import/extensions": [ "error", "ignorePackages" ],
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": [ "error", { "ignore": ["^~/", "/$"] } ],
    "import/order": [ "error", { "groups": [ "builtin", "external", "internal", "unknown", "parent", "sibling", "index", "object", "type" ] } ],
    "import/prefer-default-export": 0,
    "max-classes-per-file": 0,
    "max-len": 0,
    "max-params": 0,
    "new-cap": [ "error", { "properties": false, "capIsNewExceptions": [ "Router" ] } ],
    "no-await-in-loop": 0,
    "no-console": [ "warn", { "allow": [ "info", "warn", "error" ] } ],
    "no-continue": 0,
    "no-else-return": 0,
    "no-extra-parens": 0,
    "no-loop-func": 0,
    "no-mixed-operators": 0,
    "no-nested-ternary": 0,
    "no-param-reassign": 0,
    "no-plusplus": [ "error", { "allowForLoopAfterthoughts": true } ],
    "no-prototype-builtins": 0,
    "no-restricted-syntax": 0,
    "no-underscore-dangle": 0,
    "no-unused-expressions": 0,
    "no-unused-vars": [ "error", { "args": "none", "varsIgnorePattern": "^_$|^PropTypes$" } ],
    "no-useless-escape": 0,
    "object-curly-newline": 0,
    "operator-linebreak": 0,
    "padded-blocks": 0,
    "prefer-destructuring": 0,
    "quote-props": [ "error", "consistent" ],
    "quotes": [ "error", "double", { "allowTemplateLiterals": true } ],
    "radix": [ "error", "as-needed" ],
    "spaced-comment": [ "error", "always", { "markers": ["#region"], "exceptions": ["#endregion"] } ],
  },
};
