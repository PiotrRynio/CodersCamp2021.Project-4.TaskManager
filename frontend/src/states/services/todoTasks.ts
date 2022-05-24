// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TodoTaskProps } from '../../components/TodoTask/TodoTask';
// import { Pokemon } from './types'

// Define a service using a base URL and expected endpoints

export const todoTasksApi = createApi({
  reducerPath: 'todoTasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/rest-api' }),
  endpoints: (builder) => ({
    getTodotasks: builder.query<TodoTaskProps, string>({
      query: () => `/tasks`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodotasksQuery } = todoTasksApi;
