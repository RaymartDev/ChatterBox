module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    /**
     * "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
     */
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // tsconfigRootDir: __dirname, // Change to point to the frontend folder
    // project: ["./tsconfig.json", "./tsconfig.node.json"],
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react-hooks/exhaustive-deps": 0,
    "import/extensions": 0,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        paths: ["src"], // Add additional paths to resolve custom modules
      },
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
};
