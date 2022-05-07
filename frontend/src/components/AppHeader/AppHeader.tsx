import { AppHeaderWrapper } from './AppHeader.styled';
import { PageHeader } from 'antd';
import { Logo } from 'components';

export interface AppHeaderProps {
  pageTitle?: string;
}

export const AppHeader = ({ pageTitle }: AppHeaderProps) => {
  return (
    <AppHeaderWrapper>
      <Logo isWithoutLogoTyp={'full'} height={30} />
      <PageHeader title={pageTitle}></PageHeader>
    </AppHeaderWrapper>
  );
};
