import express from 'express';
import NoteController from '../controllers/NoteController.js';

const router = express.Router();

router.post('/', NoteController.createNote);
router.delete('/:id', NoteController.deleteNote);
router.get('/', NoteController.getNote);
router.put('/:id', NoteController.modifyNote);

export default router;
