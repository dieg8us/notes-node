console.log( 'Starting notes.js' );

const fs = require('fs');

// function to query notes in file
var fetchNotes = () => {
  // validate if exist notes json file
  try {
    var notesString = fs.readFileSync('notes-data.json');
    // return notes in file
    return JSON.parse(notesString);
  } catch (e) {
    // return empty array
    return [];
  }

};

// function to saves notes to file
var savesNotes = (notes) => {
  // write new note to json file
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// add notes
var addNote = (title, body) => {
  // notes array
  var notes = fetchNotes();
  // single note definition object
  var note = {
    title,
    body
  };

  // validate if notes are duplicate by the title (filter return an array)
  var duplicateNotes = notes.filter((note) => note.title === title );

  if(duplicateNotes.length === 0){
    // add new note to array of notes
    notes.push(note);
    // saving note
    savesNotes(notes);
    // return note
    return note;
  };

};

// get all notes
var getAll = () => {
  return fetchNotes();
};

// read note
var getNote = (title) => {
  // fetch note
  var notes = fetchNotes();
  // filter note, removing the one with title of argument
  var filteredNotes = notes.filter((note) => note.title === title);
  // return notes found
  return filteredNotes[0];
};

// remove note
var removeNote = (title) => {
  // fetch note
  var notes = fetchNotes();
  // filter note, removing the one with title of argument
  var filteredNotes = notes.filter((note) => note.title !== title);
  // save new note array
  savesNotes(filteredNotes);
  // return if note remove (true of false)
  return notes.length !== filteredNotes.length;
};

// log note
var logNote = (note) => {
  console.log( "--" );
  console.log( `Title: ${note.title}` );
  console.log( `Body: ${note.body}` );
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
