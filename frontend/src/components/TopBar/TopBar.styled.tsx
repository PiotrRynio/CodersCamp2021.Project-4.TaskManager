import styled from 'styled-components';
import { Layout } from 'antd';
const { Header } = Layout;

export const PageHeader = styled(Header)`
  display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  justify-content: space-between;
  border: 1px solid rgb(235, 237, 240);
  padding: 24px;
  background-color: #f5f5f5;
  zindex: 1;
`;

export const Home = styled.div`
  margin-right: 50%;
`;
