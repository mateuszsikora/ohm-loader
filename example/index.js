var grammar = require("./csv.ohm");
var container = document.getElementById("container");

var someInput =
  'foo,bar,baz\n' +
  'foo,bar\n' +
  '\n' +
  'foo,,baz\n' +
  ',bar,baz\n' +
  'foo';

grammar.match(someInput);

container.innerText = 'grammar match ' + match.succeeded() ? 'succeeded' : 'failed';
