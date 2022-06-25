import mongoose from 'mongoose';
import { URGENT, IMPORTANT, NORMAL } from '../constant.js';

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
    enum: [URGENT, IMPORTANT, NORMAL],
    default: NORMAL,
  },
});

export default mongoose.model('Note', NoteSchema);
