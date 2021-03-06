import express from 'express';
import NoteController from '../controllers/NoteController.js';

const router = express.Router();

router.post('/', NoteController.createNote);
router.delete('/:id', NoteController.deleteNote);
router.get('/', NoteController.getNote);
router.get('/:id', NoteController.getOneNote);
router.delete('/', NoteController.deleteAllNotes);
router.get('/priority/:priority', NoteController.getPriorityNotes);

export default router;
