export default function editNotes(windowCreate, dTouch, editForm, inputDate, editContentInput, arrNotes, parent, func) {
    document.querySelectorAll('.edit').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            windowCreate.classList.remove('none');
            dTouch.classList.remove('none');
            forEditNotes(i, editForm, inputDate, editContentInput, arrNotes, parent, func);
        })
    });
}

function forEditNotes(i, editForm, inputDate, editContentInput, arrNotes, parent, func) {
    editForm.addEventListener('submit', event => {
        event.preventDefault();
        inputDate.setAttribute('disabled', 'true');
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
