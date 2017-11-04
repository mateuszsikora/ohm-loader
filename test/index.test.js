import ohm from 'ohm-js';

import loader from '../src';

const getExpectedOutput = (input) => {
  const grammar = ohm.grammar(input);
  return `module.exports = require('ohm-js').makeRecipe(${grammar.toRecipe()});`;
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
