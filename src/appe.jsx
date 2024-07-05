import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";

import CreateArea from "./CreateArea";



function Appe(){

const [notes,setnotes]=useState([]);

function addnote(note){
setnotes((prevnote)=>{
return [...prevnote,note];
});
}

function deletenote(id){
setnotes((prevnote)=>{
return prevnote.filter((noteitem,index)=>{
return index!==id;
});
});
}
//pass over the index of the note to be delteided in delete node function
    return <div>
       <Header />
       <CreateArea
       onAdd={addnote}
       />
    {notes.map((nodeitem,index)=>{
        return <Note
        key={index}
       id={index}
        title={nodeitem.title}
        content={nodeitem.content}
        onDelete={deletenote}
        />
    })}
    {/* <Note key={1} title="Note Title" content="Note content"/> */}
       <Footer />
    </div>
}

export default Appe;