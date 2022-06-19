import NoteController from "../controllers/NoteController.js";
import express from "express";

const router = express.Router();

router.post("/", NoteController.createNote);
router.delete("/:id", NoteController.deleteNote);
router.get("/", NoteController.getNote);
router.get("/:id", NoteController.getOneNote);

export default router;