const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    debugger;

    if (!duplicateNote) {
        console.log(chalk.green.inverse('New note added'));
        console.log(notes);
        notes.push({
            'title': title,
            'body': body
        });
        saveNotes(notes);
    }
    else{
        console.log(chalk.red.inverse('Note title already exists'));
    }
}

const removeNote = (title) => {
    console.log(title);

    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notesToKeep.length === notes.length) {
        console.log("No note with this title exists");
    }
    else {
        saveNotes(notesToKeep);
        console.log("Note removed successfully");
    }

    // const notes = loadNotes();
    // const note = notes.get(note.title = title);
    
}

const listNotes = function (listbody) {
    const notes = loadNotes();
    notes.forEach((note) => {
        console.log(chalk.yellow.bold.inverse(note.title));
        if (listbody === true) {
            console.log(note.body);
        }
        console.log("-----------------------------------");
    });
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const readNote = function (title) {
    notes = loadNotes();
    note = notes.find((note) => note.title === title);
    if (note) {
        console.log(chalk.yellow.bold.inverse(note.title));
        console.log(note.body);
    }
    else {
        console.log(chalk.red.bold.inverse("No note with this title exists"));
    }
} 

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    'addNote': addNote,
    'removeNote': removeNote,
    'listNotes': listNotes,
    'readNote': readNote
};