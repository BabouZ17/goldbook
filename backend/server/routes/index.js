import Notes from '../controllers/note.js';

export default (app) => {
    app.get('/api/notes', Notes.list);
    app.put('/api/notes/:noteId', Notes.modify);
    app.post('/api/notes', Notes.create);
    app.delete('/api/notes/:noteId', Notes.delete);
}