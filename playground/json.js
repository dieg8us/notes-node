// var obj = {
//   name: 'Diego'
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log( typeof stringObj );
// console.log( stringObj );

var personString = '{"name": "Diego", "age": 32}';
var person = JSON.parse(personString);

console.log( typeof person);
console.log( `Person: ${person}`);
