import Note from "../models/Note.js";

export async function getANotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });

    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server Error" });
  }
}

export async function getANoteByID(req, res) {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found!" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getANoteByID controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Internal server Error" });
  }
}
export async function updateNotes(req, res) {
  try {
    const { title, content } = req.body;
    const updateNotes = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      {
        new: true,
      },
    );
    if (!updateNotes)
      return res.status(404).json({ message: "Note not found!" });
    res.status(200).json(updateNotes);
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Internal server Error" });
  }
}
export async function deleteANote(req, res) {
  try {
    const { title, content } = req.body;
    const deleteNote = await Note.findByIdAndDelete(
      req.params.id,
      {
        title,
        content,
      },
      {
        new: true,
      },
    );
    if (!deleteNote)
      return res.status(404).json({ message: "Note not found!" });
    res.status(200).json({ message: "Note Deleted successfully!" });
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Internal server Error" });
  }
}
