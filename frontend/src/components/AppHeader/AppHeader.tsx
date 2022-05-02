import { AppHeaderWrapper } from './AppHeader.styled';
import { PageHeader } from 'antd';

export interface topBarProps {
  pageTitle?: string | null;
  className?: string;
  logo?: React.ReactNode;
}

export const AppHeader = ({ pageTitle, className, logo }: topBarProps) => {
  const providedLogo = logo ? logo : null;

  return (
    <AppHeaderWrapper>
      <div>{providedLogo}</div>
      <PageHeader title={pageTitle} className={className}></PageHeader>
      <div></div>
    </AppHeaderWrapper>
  );
};
