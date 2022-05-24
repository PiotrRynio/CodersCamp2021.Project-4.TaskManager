import { useEffect } from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';
import { TodoTaskList } from 'components/TodoTaskList/TodoTaskList';
import { todoTaskListMock } from 'mock-data/TodoTaskList/todoTaskListMock';

export const TodoList = () => {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('To Do List');
  }, []);

  const { todoTasks } = todoTaskListMock;

  return (
    <>
      <TodoTaskList todoTasks={todoTasks} />
    </>
  );
};
