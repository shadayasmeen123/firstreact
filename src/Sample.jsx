
import { Button, TextField } from "@mui/material";
import React from "react";
function Sample() {
  return (
    <>
      <Button>
        Click
      </Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br></br>
      <TextField
        label="name"
      />
    </>
      
 
  
      
  );
}

export default Sample;