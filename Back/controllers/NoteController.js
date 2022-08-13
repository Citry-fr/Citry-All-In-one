import Note from '../models/NoteModel.js';

const NoteController = {
  createNote: async (req, res) => {
    const note = new Note({ ...req.body.data });
    console.log(req.body.data);
    console.log(note);
    try {
      await note.save();
      res.send(note);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  deleteNote: (req, res) => {
    Note.findByIdAndDelete(req.params.id)
      .then(() => res.send('Note deleted'))
      .catch((err) => res.status(400).send(err));
  },
  getNote: (req, res) => {
    Note.find()
      .then((notes) => res.send(notes))
      .catch((err) => res.status(400).send(err));
  },
  getOneNote: (req, res) => {
    Note.findById(req.params.id)
      .then((note) => res.send(note))
      .catch((err) => res.status(400).send(err));
  },
  deleteAllNotes: (req, res) => {
    Note.deleteMany()
      .then(() => res.send('All notes deleted'))
      .catch((err) => res.status(400).send(err));
  },
  getPriorityNotes: (req, res) => {
    Note.find({ priority: req.params.priority })
      .then((notes) => res.send(notes))
      .catch((err) => res.status(400).send(err));
  },
  modifyNote: (req, res) => {
    console.log(req.body.data._value);
    Note.findByIdAndUpdate(req.params.id, req.body.data._value)
      .then((note) => res.send(note))
      .catch((err) => res.status(400).send(err));
  },
};

export default NoteController;
