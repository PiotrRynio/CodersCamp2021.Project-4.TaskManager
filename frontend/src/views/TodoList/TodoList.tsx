import { useEffect } from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';

export const TodoList = () => {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('To Do List');
  }, []);

  return <>To Do List</>;
};
