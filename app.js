const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const colors = require('colors');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
  };

const bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
  };

const argv = yargs
.command('add', 'Add a new note',{
  title: titleOptions,
  body: bodyOptions,
})
.command('list', 'List all notes')
.command('read', 'Read a note',{
  title: titleOptions,
})
.command('remove', 'Remove a note',{
  title: titleOptions,
})
.help()
.argv;
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
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`.blue);
  allNotes.forEach((note)=>notes.logNotes(note));
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
