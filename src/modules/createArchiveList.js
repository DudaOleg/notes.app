export default function createArchiveList(arrNotes, arrNotesArchive, parent) {
    parent.innerHTML = '';

    if (arrNotesArchive.length <= 0) {
        return parent.innerHTML += `
                 <div class="noContent">
                 NO CONTENT
                 </div>
        `;
    }
console.log(arrNotesArchive)
    arrNotesArchive.forEach(note => {
        const {icon, name} = note;
        parent.innerHTML += `
                 <div class="notes_archive">
                    <div>${icon}</div>
                    <div>${name}</div>
                    <div>${arrNotes.length}</div>
                    <div>${arrNotesArchive.length}</div>
                 </div>
        `;
    })

}
