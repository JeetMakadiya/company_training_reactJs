import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoItems: [],
  },
  reducers: {
    addTodoItem(state, action) {
      state.todoItems.push(action.payload);
    },
    setTodoStatus(state, action) {
      for (let item of state.todoItems) {
        if (item.todoId === action.payload.itemId) {
          item.todoStatus = action.payload.itemStatus;
        }
      }
    },
    deleteTodoItem(state, action) {
      state.todoItems = state.todoItems.filter((item) => {
        return item.todoId !== action.payload;
      });
    },
  },
});

export const { addTodoItem, setTodoStatus, deleteTodoItem } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
