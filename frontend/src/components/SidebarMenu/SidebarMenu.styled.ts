import styled, { css } from 'styled-components';
import { Menu as AntMenu } from 'antd';

export const StyledSidebarMenu = styled(AntMenu)`
  padding-top: 58px;

  & .ant-menu-item:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledSidebarItem = styled(AntMenu.Item)`
  & span {
    margin-left: 10px;
  }
`;
