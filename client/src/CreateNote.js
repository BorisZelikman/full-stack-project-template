import React, {useState} from 'react'
import { db } from './firebase'
import { doc, setDoc, addDoc } from "firebase/firestore"; 

await setDoc(doc(db, "notes", "new-note-id"), {
    task: "test note",
    done: false
});

export default function CreateNote() {
    const [note, setNote] = useState("")

    const createNote = (e) => {
        e.preventDefault()
        const item = {
            task: note,
            done: false
        }

    setNote("")
    }

  return (
    <form onSubmit={createNote}>
        <input type="text" value={note} onChange={(event)=>setNote(event.target.value)}/>
        <button>Create Note</button>
    </form>

  )
}
