// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints

export type TodoTaskDto = {
  taskName: string;
  userId: string;
  isDone: boolean;
  isImportant: boolean;
  taskId: string;
};

export const todoTasksApi = createApi({
  reducerPath: 'todoTasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/rest-api' }),
  endpoints: (builder) => ({
    getTodotasks: builder.query<{ taskList: TodoTaskDto[] }, string>({
      query: (name) => `/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodotasksQuery } = todoTasksApi;
