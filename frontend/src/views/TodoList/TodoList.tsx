import { useEffect } from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';
import { TodoTaskList } from 'components/TodoTaskList/TodoTaskList';
import { todoTaskListMock } from 'mock-data/TodoTaskList/mock-1';

export const TodoList = () => {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('To Do List');
  }, []);

  return (
    <>
      <TodoTaskList todoTasks={todoTaskListMock.todoTasks} />
    </>
  );
};
