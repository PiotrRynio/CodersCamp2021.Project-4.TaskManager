import { useEffect, useState } from 'react';
import { TodoTaskProps } from '../TodoTask/TodoTask';

export const useTodoTasks = (todoTasks: TodoTaskProps[]) => {
  const [tasks, setTasks] = useState<TodoTaskProps[]>([]);
  const [completedTaskVisible, setCompletedTaskVisible] = useState(false);

  const setIncompleteTasks = () => {
    const incompleteTasks = todoTasks.filter((task) => task.isDone === false);
    setTasks(incompleteTasks);
  };

  const handleCompleteTasks = () => {
    if (completedTaskVisible) {
      setIncompleteTasks();
      setCompletedTaskVisible(false);
      return;
    }
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
