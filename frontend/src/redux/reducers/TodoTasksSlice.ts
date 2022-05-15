import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ? This is an example url that will be changed

interface InitialStateProps {
  tasks: unknown[];
  status: string;
}

const TODO_TASKS_URL = 'https://jsonplaceholder.typicode.com/todos/10';

const initialState: InitialStateProps = {
  tasks: [],
  status: '',
};

const getTodoTasks = createAsyncThunk('todoTasks/getTodoTasks', async () => {
  try {
    const response = await axios.get(TODO_TASKS_URL);
    return [...response.data];
  } catch (error: unknown) {
    // throw new Error(error);
    console.log(error);
  }
});

// export const todoTaskSlice = createSlice({
// name: 'todoTasks',
// initialState,
// extraReducers(builder) {
//   builder.addCase(getTodoTasks.pending, (stae, acton) => {
//     stae.status = 'loading';
//   });
// },
// });
