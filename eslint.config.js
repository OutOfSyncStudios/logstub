import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended"), {
    ignores: ["eslint.config.js", ".prettier.js"],
    languageOptions: {
        globals: {
            ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, "off"])),
            ...globals.node,
            ...globals.mocha,
        },

        ecmaVersion: 8,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    rules: {
        "no-console": "warn",
        "no-control-regex": "warn",
        "block-scoped-var": "warn",
        complexity: ["warn", 15],
        "consistent-return": "warn",
        curly: ["error", "all"],
        "default-case": "error",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        eqeqeq: "error",
        "guard-for-in": "warn",
        "no-alert": "warn",
        "no-caller": "error",
        "no-div-regex": "warn",
        "no-else-return": "warn",

        "no-empty": ["error", {
            allowEmptyCatch: true,
        }],

        "no-empty-function": ["error", {
            allow: ["constructors", "arrowFunctions"],
        }],

        "no-eval": "warn",
        "no-extra-label": "error",
        "no-floating-decimal": "error",
        "no-implied-eval": "warn",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "warn",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-new-func": "warn",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-return-assign": "warn",
        "no-script-url": "warn",
        "no-self-compare": "error",
        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "warn",
        "no-unused-expressions": "warn",
        "no-useless-call": "error",
        "no-void": "error",

        "no-warning-comments": ["warn", {
            terms: ["todo", "fixme", "note"],
            location: "start",
        }],

        "require-await": "warn",
        yoda: "error",
        "no-delete-var": "warn",
        "no-shadow": "warn",
        "no-shadow-restricted-names": "error",
        "no-undef-init": "error",
        "no-use-before-define": "error",
        "no-buffer-constructor": "error",
        "no-new-require": "error",
        "no-path-concat": "error",
        // Formatting Rules
        "array-bracket-newline": ["error", {
            multiline: true,
        }],

        "array-bracket-spacing": ["warn", "never"],
        "block-spacing": ["error", "always"],

        "brace-style": ["error", "1tbs", {
            allowSingleLine: true,
        }],

        camelcase: ["warn", {
            properties: "always",
        }],

        "comma-spacing": ["error", {
            before: false,
            after: true,
        }],

        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "consistent-this": ["error", "self"],
        "eol-last": ["error", "always"],
        "func-call-spacing": ["error", "never"],
        "function-paren-newline": ["error", "multiline"],

        "id-length": ["error", {
            min: 2,
        }],

        indent: ["error", 2, {
            SwitchCase: 1,
        }],

        "jsx-quotes": ["error", "prefer-double"],

        "key-spacing": ["error", {
            afterColon: true,
            beforeColon: false,
            mode: "minimum",
        }],

        "keyword-spacing": ["error", {
            before: true,
            after: true,
        }],

        "linebreak-style": ["error", "unix"],

        "lines-around-comment": ["error", {
            beforeBlockComment: true,
        }],

        "lines-between-class-members": ["error", "always"],

        "max-len": ["warn", {
            code: 120,
        }],

        "new-cap": "error",
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-array-constructor": "error",
        "no-lonely-if": "error",
        "no-multi-assign": "error",

        "no-multiple-empty-lines": ["error", {
            max: 2,
            maxEOF: 1,
            maxBOF: 1,
        }],

        "no-new-object": "error",
        "no-tabs": "error",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",

        "object-curly-newline": ["error", {
            multiline: true,
        }],

        "object-curly-spacing": ["error", "always"],
        "operator-assignment": "warn",

        "operator-linebreak": ["error", "after", {
            overrides: {
                "?": "none",
                ":": "none",
            },
        }],

        "quote-props": ["error", "as-needed"],
        quotes: ["error", "single"],
        semi: "error",

        "semi-spacing": ["error", {
            before: false,
            after: true,
        }],

        "semi-style": ["error", "last"],
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": "error",
        "space-infix-ops": "error",

        "space-unary-ops": ["error", {
            words: true,
            nonwords: false,
        }],

        "spaced-comment": ["warn", "always"],

        "switch-colon-spacing": ["error", {
            after: true,
            before: false,
        }],

        "template-tag-spacing": "error",
        
        // ES6 Formatting Rules        
        "arrow-body-style": ["error", "always"],
        "arrow-parens": "error",

        "arrow-spacing": ["error", {
            before: true,
            after: true,
        }],

        "generator-star-spacing": ["error", {
            before: true,
            after: false,
        }],

        "no-confusing-arrow": "error",
        "no-var": "warn",
        "object-shorthand": ["error", "consistent"],
        "prefer-arrow-callback": "error",
        "prefer-const": "warn",
        "prefer-numeric-literals": "warn",
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "prefer-template": "warn",
        "rest-spread-spacing": "error",
        "symbol-description": "error",
        "template-curly-spacing": "error",

        "yield-star-spacing": ["error", {
            before: true,
            after: false,
        }],
    },
}];