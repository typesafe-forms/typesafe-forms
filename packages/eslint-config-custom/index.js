module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@next/next/recommended", "plugin:@typescript-eslint/recommended", "prettier"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-constant-condition": "off",
		"no-async-promise-executor": "off",
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-empty": "off",
		"@typescript-eslint/no-empty-interface": "off",
		"@typescript-eslint/no-inferrable-types": "off",
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [".ts", ".tsx"],
			},
		],
	},
};
