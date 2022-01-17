export default function createArchiveList(arrNotes, arrNotesArchive, parent, func) {
    parent.innerHTML = '';

    if (arrNotesArchive.length <= 0) {
        return parent.innerHTML += `
                 <div class="noContent">
                 NO CONTENT
                 </div>
        `;
    }

    arrNotesArchive.forEach(note => {
        const {icon, name, category} = note;
        parent.innerHTML += `
                 <div class="notes_archive">
                    <div>${icon}</div>
                    <div>${name}</div>
                    <div>${func(arrNotes)[category.toString().toLowerCase()]}</div>
                    <div>${func(arrNotesArchive)[category.toString().toLowerCase()]}</div>
                 </div>
        `;
    })

}
