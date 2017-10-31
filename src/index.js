const ohm = require('ohm-js');

module.exports = function (rawGrammar) {
  const grammar = ohm.grammar(rawGrammar);
  return 'module.exports = require(\'ohm-js\').makeRecipe(' + grammar.toRecipe() + ');';
};
