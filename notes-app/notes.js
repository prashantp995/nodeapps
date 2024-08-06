const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return "here are your notes"
}


function addNotes(title, body) {
    const notes = loadNotes();
    //const duplicateNotes = notes.filter(note => note.title === title);
    const duplicateNote = notes.find(note => note.title === title);
    if (!duplicateNote) {
        console.log(chalk.green.inverse("Adding new Note with title" + title));
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    } else {
        console.log(chalk.red.inverse('Note Title Taken'));
    }
}

function removeNote(title) {
    const notes = loadNotes();
    //const notesToKeep = notes.filter(note => note.title != title);
    const noteToDelete = notes.map((item, index) => ({ item, index })).filter(note => note.item.title === title);
    if (noteToDelete.length) {
        console.log(chalk.green.inverse("deleting note with the title " + title));
        notes.splice(noteToDelete.index, 1);
        saveNotes(notes);
    } else {
        console.log(chalk.red.inverse("No Note found with the title " + title));
    }
}

function readNote(title) {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        console.log(chalk.green.inverse("Here is you " + title + " note"));
        console.log(chalk.yellow(note.body));
    } else {
        console.log(chalk.red.inverse("No note found for " + title));
    }
}

const saveNotes = function (notes) {
    const data = JSON.stringify(notes);
    fs.writeFileSync('notes.json', data);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

function listNotes() {
    const listOfNotes = loadNotes();
    console.log("-----------------------------");
    listOfNotes.forEach(note => {
        console.log(chalk.yellow(" Title: " + note.title));
        console.log(chalk.green(" Note: " + note.body));
        console.log("-----------------------------");
    });
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    loadNotes: loadNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}