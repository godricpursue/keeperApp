import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isClicked, setIsClicked] = useState(false);

  const [newPost, setNewPost] = useState({
    title: "",
    content: ""
  });
  function handleChange(event){
    const {value, name} = event.target;
    
    setNewPost(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
    
  }
  function handleSubmit(event){
    props.onAdd(newPost);
          setNewPost({
            title: "",
            content: ""
              });
    event.preventDefault();
  }
  function handleText(){
    setIsClicked(true);
  }
  return (
    <div>
      <form className="create-note">
        {isClicked ? <input 
         onChange={handleChange} 
         name="title" 
         placeholder="Title" 
         value={newPost.title} /> : null}
         
        <textarea onClick={handleText}
         onChange={handleChange}
         name="content"
         placeholder="Take a note..." 
         rows={isClicked ? "3" : "1"} 
         value={newPost.content}/>
         
         <Zoom in={isClicked ? true : false} >
          <Fab onClick={handleSubmit} >
              <AddIcon sx={{ fontSize: 36 }} />
            </Fab>
          </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
