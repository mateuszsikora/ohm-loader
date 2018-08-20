var grammar = require('./csv.ohm');
var multipleGrammars = require('./multiple-grammars.ohm');

var singleGrammarContainer = document.getElementById('single-grammar-container');
var multipleGrammarsContainer = document.getElementById('multiple-grammars-container');

var someInput =
  'foo,bar,baz\n' +
  'foo,bar\n' +
  '\n' +
  'foo,,baz\n' +
  ',bar,baz\n' +
  'foo';

grammar.match(someInput);

singleGrammarContainer.innerText = 'grammar match ' + (grammar.match(someInput).succeeded() ? 'succeeded' : 'failed');

var grammar1 = 'grammar CSV1 match ' + (multipleGrammars.CSV1.match(someInput).succeeded() ? 'succeeded' : 'failed');
var grammar2 = 'grammar CSV2 match ' + (multipleGrammars.CSV2.match(someInput).succeeded() ? 'succeeded' : 'failed');

multipleGrammarsContainer.innerHTML = grammar1 + '<br>' + grammar2;