const fs = require('fs')

const getNotes = function() {
    console.log('This is Node js');
}


// 12. Adding note from cmd to file

const addNotes = function(title, desc) {
    console.log('This is add note');
    const notes = loadNotes()

    const duplicate = notes.filter(function(note) {
        return note.title === title

    })
    if (duplicate.length === 0) {
        notes.push({
            title: title,
            desc: desc
        })
        saveNotes(notes)
        console.log('Adding new note with title and description');
    } else {
        console.log('Duplicate note title found');
    }
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

const saveNotes = function(notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}


module.exports = { getNote: getNotes, addNote: addNotes }