import express from "express";
import {
  createNotes,
  getANotes,
  updateNotes,
  deleteANote,
  getANoteByID,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getANotes);
router.get("/:id", getANoteByID);
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteANote);

export default router;
