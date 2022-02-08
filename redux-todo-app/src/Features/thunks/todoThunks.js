import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodoData = createAsyncThunk(
  "todo/fetchTodoData",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      ).then((responce) => {
        return responce.json();
      });
      return res;
    } catch (e) {
      return rejectWithValue(
        "Something went wrong! There is some error while fetching data!"
      );
    }
  }
);
