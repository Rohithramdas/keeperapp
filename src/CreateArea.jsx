import React, { useState } from "react";




function CreateArea(props){
    const [note,setnote]=useState({
        title:"",
        content:""
    });
function handlechange(event){
const {name,value}=event.target;
    setnote((prevvalue)=>{
return {
...prevvalue,[name]:value
};

    })

}

function submitnote(event){

    event.preventDefault();
props.onAdd(note);
setnote({
    title:"",
    content:""
})

}

return (<div className="container">
<form>
    <div class="note-container">
<input className="inp"
name="title"
onChange={handlechange}
 placeholder="Title"
  value={note.title}/>
<textarea 
name="content"
onChange={handlechange}
 placeholder="Take a note..."
  rows="3"
 value={note.content}/>
<button className="but" onClick={submitnote}>Add</button>
</div>
</form>

</div>);

}

export default CreateArea;