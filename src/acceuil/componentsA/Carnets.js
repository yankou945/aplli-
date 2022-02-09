import react from "react";
import Note from "./Notes";

function Carnets() {
    const notes = [Note]
    const carnets = Note.map(notes => <h2>{notes}</h2>)
    return <div>{carnets}  </div>
}

export default Carnets