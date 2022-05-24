import { useEffect } from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';
import { useGetTodotasksQuery } from 'states/services';
import { TodoTaskList } from 'components/TodoTaskList/TodoTaskList';

export const TodoList = () => {
  const { setTitle } = usePageTitle();
  const { data, error, isLoading } = useGetTodotasksQuery('tasks');

  useEffect(() => {
    setTitle('To Do List');
  }, []);

  console.log('data: ', data, isLoading);

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (!data || !data.taskList) {
    return <div>Fetching data error</div>;
  }
  return <TodoTaskList todoTasks={data.taskList} />;
};
