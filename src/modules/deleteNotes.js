export default
function deleteNotes(arrNotes, parent, funcForNotes, funcForArchiveNotes, arrArchiveNotes, parentArchive) {
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            arrNotes.splice(i, 1);
            funcForNotes(arrNotes, parent);
            funcForArchiveNotes(arrArchiveNotes, parentArchive);
        });
    });
}
