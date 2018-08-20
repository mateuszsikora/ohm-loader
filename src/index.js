import ohm from 'ohm-js';


const createGrammars = (ohm, recipes) => {
  for (let recipeKey in recipes) {
    recipes[recipeKey] = ohm.makeRecipe(recipes[recipeKey]);
  }
  if (Object.keys(recipes).length === 1) {
    return Object.values(recipes)[0];
  }
  return recipes;
};

export default function (rawGrammar) {
  if (this.cacheable) {
    this.cacheable();
  }

  const namespace = ohm.grammars(rawGrammar);
  for (let grammarName in namespace) {
    namespace[grammarName] = namespace[grammarName].toRecipe();
  }

  return `module.exports = (${createGrammars})(require('ohm-js'), ${JSON.stringify(namespace)});`;
}
