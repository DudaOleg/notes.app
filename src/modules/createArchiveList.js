export default function createArchiveList(arrNotes, arrNotesArchive, parent, funcToggle) {
    parent.innerHTML = '';

    if (arrNotesArchive.length <= 0) {
        return parent.innerHTML += `
                 <div class="noContent">
                 NO CONTENT
                 </div>
        `;
    }

    arrNotesArchive.forEach(note => {
        const {icon, name} = note;
        parent.innerHTML += `
                 <div class="notes_archive">
                    <div>${icon}</div>
                    <div>${name}</div>
                    <div>${arrNotes.length}</div>
                    <div>${arrNotesArchive.length}</div>
                    <div><i class="fas fa-clipboard unzip"></i></div>
                 </div>
        `;
    })

    funcToggle('unzip');
}
