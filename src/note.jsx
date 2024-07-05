import React from "react";

function Note(props){

function handleclick(){
props.onDelete(props.id);
}

return <div className="note">

    <h1 className="noteh">{props.title}</h1>
    <p className="notep">{props.content}</p>
    <button className="butt" onClick={handleclick}>delete</button>
</div>

}

export default Note;