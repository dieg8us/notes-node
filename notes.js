console.log( 'Starting notes.js' );

// add notes
var addNote = (title, body) => {
  console.log( 'Adding note', title, body);
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
