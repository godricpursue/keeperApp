import React from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import Fab from '@mui/material/Fab';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={() => {props.onDelete(props.id)}}>
        <RemoveIcon sx={{ fontSize: 26 }} />
      </Fab>
    </div>
  );
}

export default Note;
