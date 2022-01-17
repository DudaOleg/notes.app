export default function deleteNotes(arrNotes, parent, func) {
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            arrNotes.splice(i, 1);
            func(arrNotes, parent);
        });
    });
}
