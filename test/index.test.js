import ohm from 'ohm-js';

import loader from '../src';

const getExpectedOutput = (input) => {
  const namespace = ohm.grammars(input);
  for (let grammarName in namespace) {
    namespace[grammarName] = namespace[grammarName].toRecipe()
  }

  return `module.exports = (${loader.__get__('createGrammars')})(require('ohm-js'), ${JSON.stringify(namespace)});`;
};

describe('loader tests', () => {
  it('should process grammar correctly', () => {
    const cacheable = jest.fn();
    const context = {cacheable};
    const grammar = `
    CSV {
      csv = row (eol ~end row)* eol?
      row = col ("," col)*
      col = colChar*
      colChar = ~(eol | ",") any
      eol = "\\r"? "\\n"
    }
    `;
    const result = loader.call(context, grammar);
    const expectedOutput = getExpectedOutput(grammar);

    expect(result).toBe(expectedOutput);
    expect(cacheable).toBeCalled();
  });
});
