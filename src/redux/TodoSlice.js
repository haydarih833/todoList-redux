import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
            });
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload
            const todo = state.find(todo => todo.id === id)
            if (todo) {
                todo.text.title = newText.title,
                todo.text.description = newText.description,
                todo.text.priority = newText.priority

            }
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload)
        },
        deleteAllTodo: () => []
    }
})

export default todoSlice
        
export const { addTodo, updateTodo,deleteTodo, deleteAllTodo } = todoSlice.actions;