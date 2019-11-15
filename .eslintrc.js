module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "plugins": ["prettier", "react"],
  "extends": [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-base",
    "expo"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },
  "rules": {
    "indent": 0,
    "no-tabs": 0,
    "no-underscore-dangle": 0,
    "space-before-function-paren": 0,
    "quote-props": 0,
    "comma-dangle": 0,
    "operator-linebreak": 0,
    "react/jsx-wrap-multilines": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-for": 0,
    "class-methods-use-this": 0,
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "arrow-parens": 0,
    "object-curly-newline": 0,
    "react/no-children-prop":0,
    "function-paren-newline": 0,
    "implicit-arrow-linebreak": 0,
    "import/prefer-default-export": 0,
    "no-confusing-arrow": 0,
    "semi": 0,
    "react/prop-types": 0,
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "trailingComma": "all",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "parser": "flow"
    }]
  }
};
