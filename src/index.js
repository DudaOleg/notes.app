import {
    addForm, archiveList, archiveAll, categoryList, contentInput, dateInput, nameInput, createWindow, createWindowEdit,
    deleteAll, dontTouch, editForm, editInputContent, editInputDate, notesList, btnCreate
} from './modules/variables'
import totalCategory from './modules/totalCategory'
import createArchiveList from './modules/createArchiveList'
import deleteNotes from './modules/deleteNotes'
import './index.css'


const notes = [
    {
        icon: '<i class="fas fa-shopping-cart"></i>',
        name: 'qwe',
        dateCreate: ' January 15,2022',
        category: 'Task',
        content: 'qwe',
        date: {1: '2022-01-16'}
    },
    {
        icon: '<i class="fas fa-user-circle"></i>',
        name: 'qwe',
        dateCreate: ' January 15,2022',
        category: 'Random Thought',
        content: 'qwe',
        date: {2: '2022-01-16'}
    },
    {
        icon: '<i class="far fa-lightbulb"></i>',
        name: 'qwe',
        dateCreate: ' January 15,2022',
        category: 'Idea',
        content: 'qwe',
        date: {3: '2022-01-16'}
    },
    {
        icon: '<i class="fas fa-quote-right"></i>',
        name: 'asd',
        dateCreate: ' January 15,2022',
        category: 'Quote',
        content: 'asd',
        date: {4: '2022-01-16'}
    },
];
const notesArchive = [];

createArchiveList(notes, notesArchive, archiveList, totalCategory);
createNotesList(notes, notesList)


btnCreate.addEventListener('click', event => {
    event.preventDefault()
    createWindow.classList.remove('none');
    dontTouch.classList.remove('none')
});

archiveAll.addEventListener('click', () => {
    notes.splice(0,).forEach(value => notesArchive.push(value));
    createNotesList(notes, notesList);
    createArchiveList(notes, notesArchive, archiveList, totalCategory);
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
    let newContent = contentInput.value;
    let newIcon = ''

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

    if (newName && newContent) {
        notes.push({
            name: newName,
            dateCreate: newDateCreate,
            category: categoryList.value,
            content: newContent,
            date: {[dateInput.value]: dateInput.value},
            icon: newIcon
        })
        createNotesList(notes, notesList);
        createArchiveList(notes, notesArchive, archiveList, totalCategory);
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
        const {icon, name, dateCreate, category, content, date} = note;
        parent.innerHTML += `
                 <div class="notes">
                    <div>${icon}</div>
                    <div>${name}</div>
                    <div>${dateCreate}</div>
                    <div>${category}</div>
                    <div>${content}</div>
                    <div>${Object.values(date).join('  ')}</div>
                    <div><i class="fas fa-pencil-alt edit"></i></div>
                    <div><i class="fas fa-archive archive"></i></div>
                    <div><i class="fas fa-trash delete"></i></div>
                 </div>
        `;
    })

    editNotes();
    archiveNotes();
    deleteNotes(notes, notesList, createNotesList);

}

function archiveNotes() {
    document.querySelectorAll('.archive').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            notes.splice(i, 1).forEach(value => notesArchive.push(value));
            createNotesList(notes, notesList);
            createArchiveList(notes, notesArchive, archiveList, totalCategory);
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
        let newContent = editInputContent.value;
        if (newContent === '') newContent = notes[i].content;
        if (newContent.length > 33) newContent = `${newContent.substring(0, 34)}...`;
        if (Object.values(notes[i].date).length < 2) {
            dateInput.removeAttribute('disabled');
            notes[i].date[editInputDate.value] = editInputDate.value;
        }
        notes[i].content = newContent;
        createNotesList(notes, notesList);
        createWindowEdit.classList.add('none');
        dontTouch.classList.add('none');
        event.target.reset();
    })
}
