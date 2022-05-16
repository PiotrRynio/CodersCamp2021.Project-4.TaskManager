import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ? This is an example url that will be changed

type TodoTask = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

interface InitialState {
  tasks: TodoTask[];
  status: 'idle' | 'loading' | 'successed' | 'failed';
}

const TODO_TASKS_URL = 'https://jsonplaceholder.typicode.com/todos';

const initialState: InitialState = {
  tasks: [],
  status: 'idle',
};

const getTodoTasks = createAsyncThunk('todoTasks/getTodoTasks', async () => {
  try {
    const response = await axios.get(TODO_TASKS_URL);
    return [...response.data];
  } catch (error: Error) {
    console.log(error);
    return error.message;
  }
});

export const todoTaskSlice = createSlice({
  name: 'todoTasks',
  initialState,
  extraReducers(builder) {
    builder.addCase(getTodoTasks.pending, (stae, acton) => {
      stae.status = 'loading';
    });
  },
});
