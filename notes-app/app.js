const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const validator = require('validator')


yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title for the Note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body for the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body);
    }
})



yargs.command({
    command: 'remove',
    describe: 'removing note',
    builder: {
        title: {
            describe: 'Title for the Note To Remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { notes.removeNote(argv.title); }

})

yargs.command({
    command: 'list',
    describe: 'list note',
    handler() {
        notes.listNotes();
    }
})
yargs.command({
    command: 'read',
    describe: 'Reading Note',
    builder: {
        title: {
            describe: 'Title for the Note To Read',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse()

