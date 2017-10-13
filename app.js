console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log( `Command: ${command}` );
console.log( 'Process:', process.argv );
console.log( 'Yargs: ', argv );
// console.log( process );

if(command === 'add') {
  // add note
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  // get all notes
  notes.getAll();
} else if (command === 'read') {
  // reading notes
  notes.getNote(argv.title);
} else if (command === 'remove') {
  // removing note
  notes.removeNote(argv.title);
} else {
  console.log( 'Command not recognized' );
}
