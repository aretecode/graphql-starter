module.exports = {
  plugins: ['import', 'prettier', 'typescript'],
  parser: 'typescript-eslint-parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      impliedStrict: true,
    },
  },
  rules: {
    'import/no-unresolved': 'OFF',
    'eol-last': 2,
    semi: ['error', 'never'],
    'no-multi-spaces': 0,
    'semi-spacing': 2,
    'key-spacing': [2],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'padded-blocks': ['error', 'never'],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'max-len': [
      'warn',
      {
        code: 80,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    quotes: [
      1,
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    indent: 'OFF',
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
      },
    ],
    'space-infix-ops': 'OFF',
    'space-before-blocks': [
      'error',
      {
        functions: 'always',
        keywords: 'always',
        classes: 'always',
      },
    ],
    'no-invalid-regexp': 1,
    'no-unused-expressions': 1,
    // 'no-global-reassign': 1,
    'no-fallthrough': 1,
    'no-unreachable': 1,
    'no-shadow-restricted-names': 2,
    'no-new-require': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-empty': 2,
    'no-undef': 'off',
    'no-dupe-keys': 2,
    'no-empty-character-class': 2,
    'no-self-compare': 2,
    'no-unused-vars': 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'valid-typeof': 2,
    'handle-callback-err': 2,
    // 'better/no-nulls': 2,
    'max-depth': ['warn', 2],
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
    'max-statements': ['error', 10],
    // 'destructuring/in-params': [
    //   'error',
    //   {
    //     'max-params': 0,
    //   },
    // ],
    'function-paren-newline': 0,
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],
    curly: ['error', 'all'],
    'import/no-extraneous-dependencies': 0,
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'arrow-body-style': 'OFF',
    'arrow-parens': ['error', 'as-needed'],
    'no-return-assign': ['error', 'always'],
    'func-names': 'OFF',
    'template-tag-spacing': ['error', 'never'],
    'func-call-spacing': 2,
    'no-param-reassign': 1,
    'prefer-rest-params': 1,
    'import/extensions': 'OFF',
    'import/no-named-as-default': 'OFF',
    'import/export': 2,
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/html-has-lang': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/interactive-supports-focus': [
      'warn',
      {
        tabbable: [
          'button',
          'checkbox',
          'link',
          'searchbox',
          'spinbutton',
          'switch',
          'textbox',
        ],
      },
    ],
    'jsx-a11y/media-has-caption': 'warn',
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'warn',
      {
        tr: ['none', 'presentation'],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': [
      'warn',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'warn',
      {
        ul: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        ol: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ],
    'jsx-a11y/no-noninteractive-tabindex': [
      'warn',
      {
        tags: [],
        roles: ['tabpanel'],
      },
    ],
    'jsx-a11y/no-onchange': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/no-static-element-interactions': [
      'warn',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/scope': 'warn',
    'jsx-a11y/tabindex-no-positive': 'warn',
    'no-continue': 0,
    'no-loop-func': 2,
    camelcase: 2,
    'new-cap': 0,
    'id-length': [
      'error',
      {
        min: 2,
        properties: 'always',
        exceptions: ['x', 'i', 'R', '_'],
      },
    ],
    'id-blacklist': ['error', 'err', 'e', 'cb', 'callback', 'data'],
    'object-shorthand': [
      'warn',
      'always',
      {
        avoidQuotes: true,
      },
    ],
    'valid-jsdoc': ['off'],
    'no-case-declarations': 'OFF',
    strict: 'OFF',
    'no-underscore-dangle': 0,
    'no-mixed-requires': 0,
    'no-process-exit': 0,
    'no-warning-comments': 0,
    'no-alert': 1,
    'no-debugger': 1,
    'no-console': 0,
    'no-confusing-arrow': 'OFF',
    'require-jsdoc': 'OFF',
    'class-methods-use-this': 0,
    'no-process-env': 0,
    'prefer-reflect': 0,
    'nonblock-statement-body-position': 0,
    'prefer-destructuring': 0,
    'prefer-template': 0,
    'global-require': 0,
    'no-invalid-this': 'OFF',
    'prefer-const': 'error',
    'no-undefined': 'OFF',
    'prefer-spread': 'OFF',
    'no-implicit-coercion': 'OFF',
    'no-bitwise': 'OFF',
    'no-use-before-define': 'OFF',
    'import/no-duplicates': 'OFF',
    'no-duplicate-imports': 'OFF',
    'import/no-namespace': 'OFF',
  },
  globals: {},
  env: {
    es6: true,
    node: true,
    browser: true,
  },
}
