import { Route, Routes } from 'react-router-dom';
import { Statistics } from 'views/Statistics/Statistics';
import { TodoList } from 'views/TodoList/TodoList';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/statistics" element={<Statistics />} />
    </Routes>
  );
};
