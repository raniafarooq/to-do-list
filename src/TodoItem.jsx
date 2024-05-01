import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
const TodoItem = ({todo,removeTodo,toggleTodo}) => {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={removeTodo} type='submit'>
                    <DeleteIcon />
                </IconButton>
                // icon button to delete the todo at the end of the list item
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense onChange={toggleTodo}>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': todo.id }}
                    />
                </ListItemIcon>
                <ListItemText id={todo.id} primary={todo.task} />
            </ListItemButton>
        </ListItem>
    )
}

export default TodoItem
