    const addNote = myNote => {
    const allNotes = loadNotes();
    allNotes.push({reminder : myNote});
    // then the user needs to put the note back in the file 

    // this takes all notes passed to the array, saves them as Json and passes them to the file.
    const saveNotes = allNotes => {
        const notesJson = JSON.stringify(allNotes);
        fs.writeFileSync("notes.json",notes.Json);
    }
//     console.log(myNote)
// }

// module.exports = {
//     addNote
// }

// export default addNote

// try/catch to catch errors to prevent crashes 
const fs=require('fs');
const { allNotes } = require('process');

const loadNotes=()=>  {
    try{
        const dataBuffer = fs.readFileSync("srs/notes.json");
        const notesJson = dataBuffer.toString();
        return JSON.parse(notesJson);
    }   catch (error) {
        return[catch];
        }
    
};