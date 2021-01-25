const yargs = require('yargs');
const {addNote, listNotes, removeNote} = require("../utils/notes");
// node src/app.js --note=
const command = process.argv[2];
const {hideBin}= require ('yargs');

console.log(process.argv);
console.log(yargs.argv.note);

if (command == "add") {
    console.log("adding note...");
    addNote(yargs.argv.note);
}   else if (command == "list") {
    console.log("listing notes...");
    listNotes();
    // ^ calling listNotes function from notes.js ^
}   else if (command == "remove") {
    console.log("removing notes...");
    removeNote(yargs.argv.note);
    // ^ calling removeNotes function from notes.js ^
}   else {
    console.log ("command not found");
}


listNotes()