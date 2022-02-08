import { createSlice } from "@reduxjs/toolkit";
import { fetchTodoData } from "../thunks/todoThunks";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoItems: [],
    isLoading: false,
    error: "",
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodoData.fulfilled, (state, action) => {
        let items = action.payload.map((item) => {
          return {
            todoId: item.id,
            todoTitle: item.title,
            todoStatus: item.completed,
          };
        });
        state.todoItems = items;
        state.isLoading = false;
      })
      .addCase(fetchTodoData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { addTodoItem, setTodoStatus, deleteTodoItem } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
