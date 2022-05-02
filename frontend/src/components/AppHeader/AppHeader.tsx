import { AppHeaderWrapper } from './AppHeader.styled';
import { PageHeader } from 'antd';

export interface AppHeaderProps {
  pageTitle?: string | null;
  className?: string;
  logo?: React.ReactNode;
}

export const AppHeader = ({ pageTitle, className, logo }: AppHeaderProps) => {
  const providedLogo = logo ? logo : null;

  return (
    <AppHeaderWrapper>
      <div>{providedLogo}</div>
      <PageHeader title={pageTitle} className={className}></PageHeader>
      <div></div>
    </AppHeaderWrapper>
  );
};
