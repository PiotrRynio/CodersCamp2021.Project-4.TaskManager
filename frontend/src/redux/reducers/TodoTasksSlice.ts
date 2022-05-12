import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ? This is an example url that will be changed
const TODO_TASKS_URL = 'https://randomuser.me/api/?results=50';

const initialState = {
  tasks: [],
};
// const initialState = {
//   tasks: [
//     {
//       text: 'example text 1',
//       isDone: true,
//       isImportant: false,
//     },
//     {
//       text: 'example text 3',
//       isDone: false,
//       isImportant: false,
//     },
//   ],
// };

const fetchTodoTasks = createAsyncThunk('todoTasks/fetchTodoTasks', async () => {
  try {
    const response = await axios.get(TODO_TASKS_URL);
    return [...response.data];
  } catch (error: unknown) {
    // throw new Error(error);
    console.log(error);
  }
});

const todoTaskSlice = createSlice({
  name: 'todoTasks',
  initialState,
  reducers: {
    getTodoTasks: (state) => {
      // state.tasks = fetchTodoTasks();
    },
  },
});

export default todoTaskSlice.reducer;
