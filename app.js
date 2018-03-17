console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const colors = require('colors');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created'.green);
    notes.logNotes(note);
  } else {
    console.log('Note title taken'.bgRed);
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  let note = notes.getNote(argv.title);
  if(_.isUndefined(note)){
    console.log("Note is not found".red);
  }else{
    console.log("NOTE DETAILS".blue);
    notes.logNotes(note);
  }
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed'.green : 'Note not found'.bgRed;
  console.log(message);
} else {
  console.log('Command not recognized');
}
