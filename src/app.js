const yargs = require('yargs');
const {addNote, listNotes} = require("../utils/notes");
// node src/app.js --note=
const command = process.argv[2];
const {hideBin}= require ('yargs');

console.log(process.argv);
console.log(yargs.argv.note);

if (command == "add") {
    console.log("adding a note");
    addNote(yargs.argv.note);
}   else if (command == "list") {
    console.log("listing notes...");
    listNotes();
    // ^ calling listNotes function from notes.js ^
}   else if (command == "remove") {
    console.log("removing notes...");
}   else {
    console.log ("command not found");
}


listNotes()