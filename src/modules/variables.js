const btnCreate = document.querySelector('.btn_create');
const dontTouch = document.querySelector('.dont_touch');

const createWindow = document.querySelector('.create_window');
const createWindowEdit = document.querySelector('.create_window_edit');

const deleteAll = document.querySelector('.deleteAll');
const archiveAll = document.querySelector('.archiveAll');

const editForm = document.querySelector('form.form_edit');
const editInputContent = document.querySelector('.input_content_edit');
const editInputDate = editForm.querySelector('.input_date_edit');

const addForm = document.querySelector('form.add');
const nameInput = addForm.querySelector('.input_name');
const contentInput = addForm.querySelector('.input_content');
const dateInput = addForm.querySelector('.input_date');
const categoryList = addForm.querySelector('#category');

const notesList = document.querySelector('.notesList');
const archiveList = document.querySelector('.archiveList');

export {
    addForm, archiveList, archiveAll, categoryList, contentInput, dateInput, nameInput, createWindow, createWindowEdit,
    deleteAll, dontTouch, editForm, editInputContent, editInputDate, notesList, btnCreate
}
