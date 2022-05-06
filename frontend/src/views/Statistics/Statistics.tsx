import { useEffect } from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';

export const Statistics = () => {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Statistics');
  }, []);

  return <>Statistics</>;
};
