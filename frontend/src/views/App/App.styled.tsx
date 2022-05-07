import styled from 'styled-components';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

export const AppFooter = styled(Footer)`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const AppContent = styled(Content)`
  padding-top: 58px;
  min-height: 100vh;
`;
