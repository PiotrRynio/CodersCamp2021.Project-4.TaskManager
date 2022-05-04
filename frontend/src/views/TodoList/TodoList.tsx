import { useEffect } from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';

export const TodoList = () => {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('To Do List');
  }, [setTitle]);

  return <>To Do List</>;
};