console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const optionsTitle = {
  describe: 'Title of the note',
  demand: true,
  alias: 't'
};

const optionsBody = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new Note', {
      title: optionsTitle,
      body: optionsBody
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
      title: optionsTitle
    })
    .command('remove', 'Remove a note', {
      title: optionsTitle
    })
    .help()
    .argv;
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
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
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
