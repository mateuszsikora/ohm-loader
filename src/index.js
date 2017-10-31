import ohm from 'ohm-js';

export default function (rawGrammar) {
  if (this.cacheable) {
    this.cacheable();
  }

  const grammar = ohm.grammar(rawGrammar);
  return `module.exports = require('ohm-js').makeRecipe(${grammar.toRecipe()});`;
}
