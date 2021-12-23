// const fs = require('fs')

// fs.writeFileSync('demo.txt', 'this is 1 demo file')

// fs.appendFileSync('demo.txt', 'this is 2 demo file')

const utils = require('./utils')
console.log('in app');
console.log(utils.add(4, 2));


// exercise
const notes = require('./notes')
const note = notes.getNotes()
console.log(note);