const fs = require('fs')
const chal = require('chalk')
const validate = require('validator')
const yargs = require('yargs')
    // fs.writeFileSync('demo.txt', 'this is 1 demo file')
    // fs.appendFileSync('demo.txt', 'this is 2 demo file')

const utils = require('./utils')
    // console.log('in app');
    // console.log(utils.add(4, 2));


// 10 exercise
const notes = require('./notes')
const { green } = require('color-name')
const { argv } = require('process')
    // const note = notes.getNotes()
    // console.log(note);


// 11.
console.log(validate.isEmail('ak@gm.com'));
console.log(validate.isURL('http://ak.com'));

// 12. exercise
console.log(chal.green.bold('Success!!'));

// 15. input from user
console.log(process.argv[2]);

// const command = process.argv[2]
// if (command === 'add') {
//     console.log('Adding Note');
// } else if (command === 'remove') {
//     console.log('Removing Note');
// }

// console.log(process.argv);

// creating add note command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: "note description",
            demandOption: true,
            type: 'string'
        }

    },
    // handler: function(argv) {
    //     // console.log('Title :', argv.title);
    //     // console.log('Descrption :', argv.description);

    //     // 19 adding note
    //     notes.addNote(argv.title, argv.description)
    // }
    handler(argv) {
        // console.log('Title :', argv.title);
        // console.log('Descrption :', argv.description);

        // 19 adding note
        notes.addNote(argv.title, argv.description)
    }
})


// remove note command
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function(argv) {
    //     console.log('Remoing note');
    //     // 20.
    //     notes.removeNote(argv.title)
    // }
    handler(argv) {
        console.log('Remoing note');
        // 20.
        notes.removeNote(argv.title)
    }
})



// list note command
yargs.command({
    command: 'list',
    describe: 'list note',
    // handler: function() {
    //     console.log('Listing note');
    // }
    handler(argv) {
        // 23.
        // console.log('Listing note');
        notes.listNote(argv)
    }
})



// read note command
yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function() {
    //     console.log('Reading note');
    // }
    handler(argv) {
        // console.log('Reading note');
        // 24.
        notes.findNote(argv.title)
    }
})

console.log(yargs.argv);