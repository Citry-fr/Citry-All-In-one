import Note from "../models/NoteModel.js";

// const createNote = (req, res) => {
//     const note = new Note({ ...req.body });
//     note.save()
//         .then(() => res.send(note))
//         .catch(err => res.status(400).send(err));
// };

// const deleteNote = (req, res) => {
//     Note.findByIdAndDelete(req.params.id)
//         .then(() => res.send())
//         .catch(err => res.status(400).send(err));
// };

const NoteController = {
    createNote: (req, res) => {
        const note = new Note({ ...req.body });
        note.save()
            .then(() => res.send(note))
            .catch(err => res.status(400).send(err));
    },
    deleteNote: (req, res) => {
        Note.findByIdAndDelete(req.params.id)
            .then(() => res.send("Note deleted"))
            .catch(err => res.status(400).send(err));
    },
    getNote: (req, res) => {
        Note.find()
            .then(notes => res.send(notes))
            .catch(err => res.status(400).send(err));
    },
    getOneNote: (req, res) => {
        Note.findById(req.params.id)
            .then(note => res.send(note))
            .catch(err => res.status(400).send(err));
    },
    deleteAllNotes: (req, res) => {
        Note.deleteMany()
            .then(() => res.send("All notes deleted"))
            .catch(err => res.status(400).send(err));
    },
    getPriorityNotes: (req, res) => {
        Note.find({ priority: req.params.priority })
            .then(notes => res.send(notes))
            .catch(err => res.status(400).send(err));
    }
};

export default NoteController;