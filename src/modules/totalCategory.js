export default function totalCategory(arr) {
    const obj = {task:0, 'random thought':0, idea:0, quote:0}
    arr.forEach(value => {
        switch (value.category) {
            case 'Task':
                ++obj.task;
                break;
            case 'Random Thought':
                ++obj['random thought'];
                break;
            case 'Idea':
                ++obj.idea;
                break;
            case 'Quote':
                ++obj.quote;
                break;
        }
    })
    return obj;
}
