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
  deleteNote: async (req, res) => {
    try {
      await Note.findByIdAndDelete(req.params.id);
      res.send('Note deleted');
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getNote: async (req, res) => {
    try {
      const notes = await Note.find();
      res.send(notes);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  modifyNote: async (req, res) => {
    try {
      const note = await Note.findByIdAndUpdate(req.params.id, req.body.data);
      res.send(note);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};

export default NoteController;
