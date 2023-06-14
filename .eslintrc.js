module.exports = {
    env: {
        es2016: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        // "standard-with-typescript",
        "plugin:react/recommended",
        "next/core-web-vitals"
    ],
    parserOptions: {
        "ecmaVersion": "latest"
    },
    plugins: [
        "react"
    ],
    rules: {
        "arrow-parens": ["error", "always"],
        "dot-location": "error",
        "func-style": ["error", "declaration"],
        "jsx-quotes": ["error", "prefer-single"],
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-empty-function": "error",
        "no-eval": "error",
        "no-extra-semi": "error",
        "no-inline-comments": "error",
        "no-multi-spaces": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unused-vars": "error",
        "no-useless-return": "error",
        "prefer-const": "error",
        "prefer-template": "error",
        "quotes": ["error", "double"],
        "require-await": "error",
        "semi": "error",
        "semi-spacing": "error",
        "valid-typeof": "error",
        "vars-on-top": "error",
    }
};
