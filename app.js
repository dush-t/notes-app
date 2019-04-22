const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',

        },
        body: {
            describe: 'Note body',
            demandOption: 'true',
            type: 'string',
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List the notes',
    builder: {
        listbody: {
            describe: 'Leave empty if you do not want to see bodies with list',
            type: 'string',
        }
    },
    handler(argv) {
        console.log('These are your notes - ');
        console.log("");
        if (!argv.listbody) {
            notes.listNotes(false);
        }
        else {
            notes.listNotes(true);
        }
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
// console.log(chalk.blue.bold.inverse(getNotes()))
yargs.parse();
// console.log(yargs.argv);