module.exports = {
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  rules: {
    "max-len": ["error", { code: 150, ignoreTemplateLiterals: true }],
    "@typescript-eslint/no-non-assertion": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "import/prefer-default-export": "off",
    "arrow-body-style": "off",
    "import/newline-after-import": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "no-nested-ternary": "off",

    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        json: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".tsx", ".ts", ".tsx"],
      },
    },
  },
};
