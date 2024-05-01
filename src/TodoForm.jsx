import { ListItem } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Create from '@mui/icons-material/Create';
const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText('')
    }
    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField id="filled-basic"
                    label="Add To do" variant="filled"
                    onChange={handleChange}
                    value={text}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="create text"
                                >
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        </ListItem>
    )
}
export default TodoForm
