console.log( 'Starting notes.js' );

const fs = require('fs');

// add notes
var addNote = (title, body) => {
  // notes array
  var notes = [];
  // single note definition object
  var note = {
    title,
    body
  };

  // validate if exist notes json file
  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {

  }

  // validate if notes are duplicate by the title (filter return an array)
  var duplicateNotes = notes.filter((note) => note.title === title );

  if(duplicateNotes.length === 0){
    // add new note to array of notes
    notes.push(note);
    // write new note to json file
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  };

};

// get all notes
var getAll = () => {
  console.log( 'Getting all notes' );
};

// read note
var getNote = (title) => {
  console.log( 'Reading note', title );
};

// remove note
var removeNote = (title) => {
  console.log( 'Removing note', title );
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
