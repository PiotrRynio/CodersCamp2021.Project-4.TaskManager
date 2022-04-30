import { PageHeader, Home } from './TopBar.styled';

export const TopBar = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <PageHeader>
      <div>Logo</div>
      <Home>{pageTitle}</Home>
    </PageHeader>
  );
};
