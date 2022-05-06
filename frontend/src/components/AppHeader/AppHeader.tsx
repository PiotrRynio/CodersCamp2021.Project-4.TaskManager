import { AppHeaderWrapper, Logo } from './AppHeader.styled';
import { PageHeader } from 'antd';

export interface AppHeaderProps {
  pageTitle?: string;
}

export const AppHeader = ({ pageTitle }: AppHeaderProps) => {
  return (
    <AppHeaderWrapper>
      <Logo>Logo</Logo>
      <PageHeader title={pageTitle}></PageHeader>
    </AppHeaderWrapper>
  );
};
