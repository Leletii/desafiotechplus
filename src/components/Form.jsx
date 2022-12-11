import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export default function From({  addTodo }){

    const [text, setText] = useState(null); 
    const [id, setId] = useState(0);  

    const todoCreate = (text) => {
        const todoObj = { text: text, id: id};
        setId(id + 1);
        addTodo(todoObj);
    };

    return (
        <Paper style={{ padding: "1em" }}>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <TextField 
                id="standard-basic" 
                label="Descrição" 
                variant="standard" 
                onChange={(e) => setText(e.target.value)}
                fullWidth
                />
                <Button variant="text" onClick={() => todoCreate(text)}> + </Button>
            </div>
        </Paper>
    )
}

