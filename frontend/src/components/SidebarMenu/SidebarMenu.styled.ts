import styled, { css } from 'styled-components';
import { Menu as AntMenu } from 'antd';

export const StyledSidebarMenu = styled(AntMenu)`
  padding-top: 58px;
`;

export const StyledSidebarItem = styled(AntMenu.Item)`
  &:not(:last-child) {
    border-bottom: 1px solid grey;
  }
`;
