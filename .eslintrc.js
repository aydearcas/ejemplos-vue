module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "indent": ["error", 2],
        "semi": ["error", "always"],
        "quotes": ["error", "double", { "allowTemplateLiterals": true}],
        "array-bracket-spacing": ["error", "never", { "singleValue": false}],
        "camelcase": ["error"],
        "capitalized-comments": ["error"],
        "space-unary-ops": ["error", { "words": true, "nonwords": false}],
        "spaced-comment": ["error", "always"],
        "no-tabs": ["error", {"allowIndentationTabs": true}],
        "multiline-comment-style": ["error", "starred-block"],
        "comma-spacing": ["error", {"before": false, "after": true}],
        "eol-last": ["off"],
        "no-var": ["error"],
        "init-declarations": ["error", "always"],
        "no-shadow": ["error"],
        "no-unused-vars": ["warn"],
        "yoda": ["error", "never"],
        "max-len": ["error"],
        "max-lines": ["error"],
        "max-lines-per-function": ["error", 60],
        "max-nested-callbacks": ["error", 5],
        "max-params": ["error", 6],
        "max-depth": ["error", 5],
        "curly": ["error"],
        "default-case": ["error"],
        "default-param-last": ["error"],
        "no-alert": ["warn"],
        "no-eval": ["warn"],
        "vars-on-top": ["warn"],
        "arrow-parens": ["error"],
        "space-before-function-paren": ["error"],
        "no-unexpected-multiline": ["error"],
        "no-unreachable": ["error"],
        "no-unsafe-finally": ["error"],
        "use-isnan": ["error"],
        "valid-typeof": ["error"],
        "no-sparse-arrays": ["error"],
        "no-setter-return": ["error"],
        "no-irregular-whitespace": ["error"],
        "no-extra-semi": ["error"],
        "no-extra-parens": ["error"],
        "consistent-return": ["error"],
        "dot-location": ["error"],
        "eqeqeq": ["error", "always"],
        "no-new-func": ["error"]



  }

}