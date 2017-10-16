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
  var note = notes.addNote(argv.title, argv.body);

  // validate if note is empty
  if(note) {
    console.log( "Note is created" );
    notes.logNote(note);
  } else {
    console.log( "Note title taken" );
  }

} else if (command === 'list') {
  // get all notes
  notes.getAll();
} else if (command === 'read') {
  // reading notes
  var note = notes.getNote(argv.title);
  // message
  if(note) {
    console.log( `Note found` );
    notes.logNote(note);
  } else {
    console.log( `Note was not found` );
  }
} else if (command === 'remove') {
  // removing note
  var noteRemoved = notes.removeNote(argv.title);
  // message if note if remove
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log( message);
} else {
  console.log( 'Command not recognized' );
}
