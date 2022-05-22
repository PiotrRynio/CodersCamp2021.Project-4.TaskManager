import { useEffect } from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';
import { TodoTaskList } from 'components/TodoTaskList';
import { todoTaskListMock } from 'mock-data/TodoTaskList/TodotaskListMock';

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
