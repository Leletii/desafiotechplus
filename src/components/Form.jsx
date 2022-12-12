import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from '@mui/system';



export default function From({  addTodo }){

    const [text, setText] = useState(null); 
    const [id, setId] = useState(0);  

    const todoCreate = (text) => {
        const todoObj = { text: text, id: id};
        setId(id + 1);
        addTodo(todoObj);
        document.getElementById("standard-basic").value = null;
    };

    return (
        <Paper style={{ padding: "1em" }}>
            <h1 className="title"> Lista de Tarefas </h1>
            <div style={{ display: "flex"}}>
                <TextField 
                id="standard-basic" 
                label="Descrição" 
                variant="standard" 
                onChange={(e) => setText(e.target.value)}
                fullWidth
                />
            <Button variant="contained" onClick={() => todoCreate(text)}> + </Button>
            </div>
        </Paper>
    )
}

