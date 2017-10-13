// var obj = {
//   name: 'Diego'
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log( typeof stringObj );
// console.log( stringObj );

// var personString = '{"name": "Diego", "age": 32}';
// var person = JSON.parse(personString);
//
// console.log( typeof person);
// console.log( person );

const fs = require('fs');

// writing file
var originalNote = {
  title: 'Some Title',
  body: 'Some Body'
};

var originalNoteString = JSON.stringify(originalNote);

// originalNoteString
fs.writeFileSync('notes.json', originalNoteString);

// reading file
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString)

// note
console.log( typeof note);
console.log( note.title );
