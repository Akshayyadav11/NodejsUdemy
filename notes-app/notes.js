const { default: chalk } = require('chalk');
const fs = require('fs')


// const getNotes = function() {
// arrow
const getNotes = () => {
    console.log('This is Node js');
}


// const loadNotes =function ()  {
// arrow
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

// const saveNotes = function(notes) {
// arrow
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}



// 12. Adding note from cmd to file

// const addNotes = function(title, desc) {
const addNotes = (title, desc) => {
    console.log('This is add note');
    const notes = loadNotes()

    // const duplicate = notes.filter(function(note) {
    //     return note.title === title

    // })
    // const duplicates = notes.filter((note) => {
    //     return note.title === title

    // })
    const duplicateNote = notes.find((note) => {
        return note.title === title

    })

    debugger;

    if (!duplicateNote) {
        notes.push({
            title: title,
            desc: desc
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('Adding new note with title and description'));
    } else {
        console.log(chalk.bgRed('Duplicate note title found'));
    }
}


// 20.
// const removeNotes = function(title) {
// arrow
const removeNotes = (title) => {
    console.log('This is remove note');
    const notes = loadNotes()

    const noteToKeep = notes.filter((note) => {
        return note.title !== title

    })
    if (notes.length > noteToKeep.length) {
        saveNotes(noteToKeep)
        console.log(chalk.bgGreen('Note removed !'));
    } else {
        console.log(chalk.bgRed('No note found'));
    }
}



// 20.
// const removeNotes = function(title) {
// arrow
const listNotes = (args) => {
    console.log(chalk.bgGreen('This is List of notes'));
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(element.title)
    });

}



// 12. Adding note from cmd to file

// const addNotes = function(title, desc) {
const findNotes = (title) => {
    console.log('This is find note');
    const notes = loadNotes()
    const foundNote = notes.find((note) => {
        return note.title === title

    })
    console.log(foundNote);
    if (foundNote) {
        console.log('Note found => Title : ' + chalk.green(foundNote.title) + " Description : " + chalk.yellow(foundNote.desc));
        // console.log(chalk.bgGreen('Adding new note with title and description'));
    } else {
        console.log(chalk.bgRed('note title not found'));
    }
}

module.exports = { getNote: getNotes, addNote: addNotes, removeNote: removeNotes, listNote: listNotes, findNote: findNotes }