import { URGENT, IMPORTANT, NORMAL, SECONDARY } from "../constant.js";
import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true,
        enum: [URGENT, IMPORTANT, NORMAL, SECONDARY],
        default: NORMAL
    }
});

export default mongoose.model("Note", NoteSchema);