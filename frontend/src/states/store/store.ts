import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../slices';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from '../services/pokemon';
import { todoTasksApi } from '../services/todoTasks';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [todoTasksApi.reducerPath]: todoTasksApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoTasksApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
