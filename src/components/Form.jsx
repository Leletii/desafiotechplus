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

    const customTheme = createTheme({
        palette: {
          primary: {
            main: '#1976d2',
            contrastText: 'white',
          },
        },
      });

    const Button = styled('div')(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
      }));

    return (
        <Paper style={{ padding: "1em" }}>
            <h1 className="title"> Lista de Tarefas </h1>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <TextField 
                id="standard-basic" 
                label="Descrição" 
                variant="standard" 
                onChange={(e) => setText(e.target.value)}
                fullWidth
                />
            </div>
            <ThemeProvider theme={customTheme}>
                    <Button variant="text" onClick={() => todoCreate(text)}> + </Button>
            </ThemeProvider>
        </Paper>
    )
}

