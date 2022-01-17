import {
    addForm, archiveList, archiveAll, categoryList, contentInput, dateInput, nameInput, createWindow, createWindowEdit,
    deleteAll, dontTouch, editForm, editInputContent, editInputDate, notesList, btnCreate
} from './modules/variables'
import createArchiveList from './modules/createArchiveList'
import deleteNotes from './modules/deleteNotes'
import './index.css'

const notes = [
    {
        icon: '<i class="fas fa-shopping-cart"></i>',
        name: 'first note',
        dateCreate: ' January 15,2022',
        category: 'Task',
        content: 'first note content',
        dates: []
    },
    {
        icon: '<i class="fas fa-user-circle"></i>',
        name: 'second note',
        dateCreate: ' January 15,2022',
        category: 'Random Thought',
        content: 'second note content',
        dates: []
    },
    {
        icon: '<i class="far fa-lightbulb"></i>',
        name: 'third note',
        dateCreate: ' January 15,2022',
        category: 'Idea',
        content: 'thirty note content',
        dates: []
    },
    {
        icon: '<i class="fas fa-quote-right"></i>',
        name: 'fourth note',
        dateCreate: ' January 15,2022',
        category: 'Quote',
        content: 'fourth note content',
        dates: []
    },
];

const notesArchive = [
    {
        icon: '<i class="fas fa-shopping-cart"></i>',
        name: 'first note',
        dateCreate: ' January 15,2022',
        category: 'Task',
        content: 'first note content',
        dates: []
    },
    {
        icon: '<i class="fas fa-user-circle"></i>',
        name: 'second note',
        dateCreate: ' January 15,2022',
        category: 'Random Thought',
        content: 'second note content',
        dates: []
    },
    {
        icon: '<i class="far fa-lightbulb"></i>',
        name: 'third note',
        dateCreate: ' January 15,2022',
        category: 'Idea',
        content: 'thirty note content',
        dates: []
    },
    {
        icon: '<i class="fas fa-quote-right"></i>',
        name: 'fourth note',
        dateCreate: ' January 15,2022',
        category: 'Quote',
        content: 'fourth note content',
        dates: []
    },
];

createArchiveList(notes, notesArchive, archiveList, notesToggle);
createNotesList(notes, notesList)

btnCreate.addEventListener('click', event => {
    event.preventDefault()
    createWindow.classList.remove('none');
    dontTouch.classList.remove('none')
});

archiveAll.addEventListener('click', () => {
    notes.splice(0,).forEach(value => notesArchive.push(value));
    createNotesList(notes, notesList);
    createArchiveList(notes, notesArchive, archiveList, notesToggle);
});

deleteAll.addEventListener('click', () => {
    notes.splice(0,);
    createNotesList(notes, notesList);
});

addForm.addEventListener('submit', event => {
    event.preventDefault();

    let newName = nameInput.value;
    const options = {month: 'long', day: 'numeric'};
    const newDateCreate = ` ${new Date().toLocaleString('eng', options)},${new Date().getFullYear()}`;
    let contentValue = contentInput.value;

    if (newName && contentValue) {

        let newIcon = ''
        const obj = normalizeDateAndContent(contentValue)
        let {date, newContent} = obj;
        if (newName.length > 20) newName = `${newName.substring(0, 21)}...`

        if (newContent.length > 33) newContent = `${newContent.substring(0, 34)}...`

        switch (categoryList.value) {
            case 'Task':
                newIcon = `<i class="fas fa-shopping-cart"></i>`
                break;
            case 'Random Thought':
                newIcon = `<i class="fas fa-user-circle"></i>`
                break;
            case 'Idea':
                newIcon = `<i class="far fa-lightbulb"></i>`
                break;
            case 'Quote':
                newIcon = `<i class="fas fa-quote-right"></i>`
                break;
        }

        notes.push({
            name: newName,
            dateCreate: newDateCreate,
            category: categoryList.value,
            content: newContent,
            dates: date,
            icon: newIcon
        })
        createNotesList(notes, notesList);
        createArchiveList(notes, notesArchive, archiveList, notesToggle);
        createWindow.classList.add('none');
        dontTouch.classList.add('none')
        event.target.reset();
    }
});

function createNotesList(arr, parent) {
    parent.innerHTML = '';

    if (arr.length <= 0) {
        parent.innerHTML += `
                 <div class="noContent">
                 NO CONTENT
                 </div>
        `;
    }

    arr.forEach(note => {
        const {icon, name, dateCreate, category, content, dates} = note;

        parent.innerHTML += `
                 <div class="notes">
                    <div>${icon}</div>
                    <div>${name}</div>
                    <div>${dateCreate}</div>
                    <div>${category}</div>
                    <div>${content}</div>
                    <div>${dates}</div>
                    <div><i class="fas fa-pencil-alt edit"></i></div>
                    <div><i class="fas fa-archive archive"></i></div>
                    <div><i class="fas fa-trash delete"></i></div>
                 </div>
        `;
    })

    editNotes();
    notesToggle('archive');
    deleteNotes(notes, notesList, createNotesList, createArchiveList, notesArchive, archiveList, notesToggle);

}

function notesToggle(querySelector) {
    document.querySelectorAll(`.${querySelector}`).forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            if (querySelector === 'archive') notes.splice(i, 1).forEach(value => notesArchive.push(value));
            if (querySelector === 'unzip') notesArchive.splice(i, 1).forEach(value => notes.push(value));
            createNotesList(notes, notesList);
            createArchiveList(notes, notesArchive, archiveList, notesToggle);
        })
    });
}

function editNotes() {
    document.querySelectorAll('.edit').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            createWindowEdit.classList.remove('none');
            dontTouch.classList.remove('none');
            forEditNotes(i);
        })
    });
}

function forEditNotes(i) {
    editForm.addEventListener('submit', event => {
        event.preventDefault();
        dateInput.setAttribute('disabled', 'true');
        let contentValue = editInputContent.value;


        if (contentValue) {
            const obj = normalizeDateAndContent(contentValue)
            let {date, newContent} = obj;

            if (newContent.length > 33) newContent = `${newContent.substring(0, 34)}...`;

            notes[i].content = newContent;

            if (date.length > 0) {
                notes[i].dates.push(date)
            }

        }

        createNotesList(notes, notesList);
        createWindowEdit.classList.add('none');
        dontTouch.classList.add('none');
        event.target.reset();

    })
}

function normalizeDateAndContent(content) {
    let date = content.split(' ').filter(value =>
        value?.includes('/') && value.length <= 10 && value.length >= 8);
    if (date.length <= 0 ){
        let newContent = content
        date = ''
        return {
            date, newContent
        }
    }
    const slice = content.slice(0, content.indexOf([...date][0]))
    let newContent = slice + content.slice(content.indexOf([...date][0]) + date[0].length);

    return {
        date, newContent
    }
}
