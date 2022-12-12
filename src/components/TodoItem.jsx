import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { ListItemButton, ListItemIcon, Paper } from '@mui/material';


export default function TodoItem({todo, deleteTodo}) {
  return (
    <Paper style={{ padding: "0.5em 0em" }}>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
              <RemoveCircleIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
            </ListItemIcon>
          </ListItemButton>
          <ListItemText primary={todo.text} />
        </ListItem>
    </Paper>
  );
}

