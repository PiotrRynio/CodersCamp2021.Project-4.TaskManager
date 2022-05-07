// import { TodoTaskListProps } from './types';
import { useEffect, useState } from 'react';
import { TodoTaskProps } from './types';

export const useTodoTasks = (todoTasks: TodoTaskProps[]) => {
  const [tasks, setTasks] = useState<TodoTaskProps[]>([]);
  const [completedTaskVisible, setCompletedTaskVisible] = useState(false);

  const setIncompleteTasks = () => {
    const incompleteTasks = todoTasks.filter((task) => task.isDone === false);
    setTasks(incompleteTasks);
  };

  const handleCompleteTasks = () => {
    const completeTasks = todoTasks.filter((task) => task.isDone === true);
    setTasks((prevState) => {
      return [...prevState, ...completeTasks];
    });
    setCompletedTaskVisible(true);
  };

  useEffect(() => {
    setIncompleteTasks();
  }, []);

  return { tasks, completedTaskVisible, handleCompleteTasks };
};
