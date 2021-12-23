const fs = require('fs')
const chal = require('chalk')
const validate = require('validator')

// fs.writeFileSync('demo.txt', 'this is 1 demo file')
// fs.appendFileSync('demo.txt', 'this is 2 demo file')

const utils = require('./utils')
    // console.log('in app');
    // console.log(utils.add(4, 2));


// 10 exercise
const notes = require('./notes')
const { green } = require('color-name')
const note = notes.getNotes()
    // console.log(note);


// 11.
console.log(validate.isEmail('ak@gm.com'));
console.log(validate.isURL('http://ak.com'));

// 12. exercise
console.log(chal.green.bold('Success!'));