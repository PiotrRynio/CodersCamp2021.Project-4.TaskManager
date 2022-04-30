import { TopBar } from 'components/TopBar/TopBar';

export const Home = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <>
      <TopBar pageTitle={pageTitle} />
    </>
  );
};
