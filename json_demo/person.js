const fs = require('fs')

// objecty created to test json 
    const person = {
        name: "Dan",
        age: 35,
        favColour: "blue",
    };
    // this constant is storing the stingified gersion of our object in Json
    const personJson = JSON.stringify(person);

    console.log(person);
    console.log(personJson);


// create new Json data locally
fs.writeFileSync("json_demo/person.json",personJson);
const dataBuffer = fs.readFileSync(json_demo/person.json);
console.log(dataBuffer);

// parsing the Json data the get it back as a JS object
const dataJson = dataBuffer.toString();
// now ir is a JS object we can access it with dot notation.
const data = JSON.parse(dataJson);

console.log (data);


