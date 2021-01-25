const yargs = require('yargs');
const {addNote} = require("../utils/notes");
// node src/app.js --note=
const command = process.argv[2];
const {hideBin}= require ('yargs');

console.log(process.argv);
console.log(yargs.argv.note);

if (command == "add") {
    console.log("adding a note");
    addNote(yargs.argv.note);
}
