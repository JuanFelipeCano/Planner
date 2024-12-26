const customFunctionRule = async (parsed, when = 'always', customFunction) => {
  if (customFunction === void 0) { // void 0 => undefined
    return [true];
  }

  if (typeof customFunction !== 'function') {
    throw new TypeError('Not a valid function!');
  }

  return customFunction(parsed, when);
};

const customRules = {
  'custom/scope-enum': customFunctionRule,
};

const customPlugins = [
  {
    rules: customRules,
  },
];

const DEFAULT_TYPE_ENUM = [
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test',
];

const customScopeEnum = (parsed) => {
  const scope = parsed.scope;
  const regex = /^(us|bug|fix|task)-\d{1,5}$/;
  if (regex.test(scope)) {
    return [true];
  } else {
    return [false, `The scope '${scope}' does not comply with the required format (us|bug|fix)-xxxxx`];
  }
}

module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: customPlugins,
  rules: {
    'type-enum': [2, 'always', [...DEFAULT_TYPE_ENUM]],
    'scope-empty': [2, 'never'],
    'custom/scope-enum': [
      2,
      'always',
      (parsed) => customScopeEnum(parsed),
    ],
  },
};

/**
 * @rule type-enum
 * @observation allowed types
 * @name DEFAULT_TYPE_ENUM
 * build(build system or external dependencies changes)
 * ci(CI configurations and scripts changes)
 * docs(documentation)
 * feat(feature)
 * fix(bug fix)
 * perf(improves performance)
 * refactor(neither fixes a bug or adds a feature)
 * revert(reverts a previous commit)
 * style(formatting, missing semi colons, etc.)
 * test(adding missing tests)
 */

/**
 * @rule custom/scope-enum
 * @name customScopeEnum
 * @observation allowed prefix: us | bug | fix | task
 */
