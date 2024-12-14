import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      action.todos = action.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    updateTodo: (state, action) => {
      const { id, updates } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        Object.assign(todo, updates);
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
