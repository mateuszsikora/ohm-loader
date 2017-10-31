import ohm from 'ohm-js';

export default function (rawGrammar) {
  const grammar = ohm.grammar(rawGrammar);
  return `module.exports = require('ohm-js').makeRecipe(${grammar.toRecipe()});`;
}
