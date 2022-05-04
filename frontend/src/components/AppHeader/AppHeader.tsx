import { AppHeaderWrapper } from './AppHeader.styled';
import { PageHeader } from 'antd';

export interface AppHeaderProps {
  pageTitle?: string;
  logo?: React.ReactNode;
}

export const AppHeader = ({ pageTitle, logo }: AppHeaderProps) => {
  const providedLogo = logo ? logo : null;

  return (
    <AppHeaderWrapper>
      <div>{providedLogo}</div>
      <PageHeader title={pageTitle}></PageHeader>
      <div></div>
    </AppHeaderWrapper>
  );
};
