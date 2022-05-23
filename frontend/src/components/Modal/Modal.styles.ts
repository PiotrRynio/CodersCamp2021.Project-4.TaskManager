import styled from 'styled-components';
import { Modal } from 'antd';

export const StyledModal = styled(Modal)`
  .ant-btn-primary {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary};
    &:hover {
      background: ${({ theme }) => theme.colors.hoverPrimary};
      border-color: ${({ theme }) => theme.colors.hoverPrimary};
    }
    &:focus,
    &:active {
      background: ${({ theme }) => theme.colors.activePrimary};
      border-color: ${({ theme }) => theme.colors.activePrimary};
    }
  }
  .ant-btn-default {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      color: ${({ theme }) => theme.colors.hoverPrimary};
      border-color: ${({ theme }) => theme.colors.hoverPrimary};
    }
    &:focus,
    &:active {
      border-color: ${({ theme }) => theme.colors.activePrimary};
      color: ${({ theme }) => theme.colors.activePrimary};
    }
  }
`;
