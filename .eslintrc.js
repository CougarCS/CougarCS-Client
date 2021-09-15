module.exports = {
    "env" : {
        "browser": true,
        "es6": true
    },
    "extends" : [
        "eslint:recommended",
		"plugin:react/recommended",
		"react-app",
		"prettier"
    ],
    "parserOptions": {
		"ecmaVersion": 12,
		"ecmaFeatures": {
			"jsx": true
		}
	},
    "plugins": ["react", "prettier"],
	"rules": {
		"linebreak-style": ["error", (require("os").EOL === "\r\n" ? "windows" : "unix")],
		"react/prop-types": "off",
		"prettier/prettier": [
			"error",
			{
				"useTabs": true,
				"semi": true,
				"jsxSingleQuote": true,
				"singleQuote": true,
				"endOfLine" : "auto"
			}
		]
	}
};