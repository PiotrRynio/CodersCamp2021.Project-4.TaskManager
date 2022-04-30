import { TopBar } from 'components/TopBar/TopBar';

export const TodoList = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <>
      <TopBar pageTitle={pageTitle} />
    </>
  );
};
