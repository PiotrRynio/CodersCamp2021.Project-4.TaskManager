import { Route, Routes } from 'react-router-dom';
import { Home } from 'views/Home/Home';
import { TodoList } from 'views/TodoList/TodoList';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home pageTitle="Home" />} />
      <Route path="/todoList" element={<TodoList pageTitle="Todo List" />} />
    </Routes>
  );
};
