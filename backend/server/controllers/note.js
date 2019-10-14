import model from '../models';

const {Note} = model;

class Notes {
    static create(req, res){
        const {writer, content} = req.body
        return Note.create({
            writer, 
            content
        })
        .then(note => res.status(201).send(
            {
                success: "true",
                message: "Note created!",
                note
            }
        ))
    }
    static list(req, res){
        return Note
            .findAll()
            .then(notes => res.status(200).send(notes));
    }
    static modify(req, res){
        const {writer, content} = req.body
        return Note
            .findById(req.params.noteId)
            .then(note => {
                if(!note){
                    return res.status(400).send({
                        message: "Note not found!"
                    });
                }
                return note.update({
                    writer: writer || note.writer,
                    content: content || note.content
                })
                .then(() => res.status(200).send(note))
                .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    } 
    static delete(req, res){
        return Note
            .findById(req.params.noteId)
            .then(note => {
                if(!note){
                    return res.status(400).send({
                        message: "Note not found!"
                    });
                }
                return note
                    .destroy()
                    .then(() => res.status(200).send({
                        message: "Note has been deleted!"
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default Notes;