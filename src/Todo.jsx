import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

export default function Todo() {
    const getInitialTodos = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }
    const [todos, setTodos] = useState(getInitialTodos);
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const toggleTodo = (id) => {
        setTodos(prevTodo => {
            return prevTodo.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            })
        })
    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    const addTodo = (newTodo) => {
        setTodos(prevTodos => [...prevTodos, {
            id: crypto.randomUUID(),
            task: newTodo,
            completed: false

        }])
    }
    return (
        <>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',m:3}}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {todos.map((todo) => {
                        return (
                            <TodoItem todo={todo} key={todo.id} removeTodo={() => removeTodo(todo.id)} toggleTodo={() => toggleTodo(todo.id)} />
                        );
                    })}
                    <TodoForm addTodo={addTodo} />
                </List>
            </Box>

        </>
    );
}