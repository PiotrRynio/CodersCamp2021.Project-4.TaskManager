import styled, { css } from 'styled-components';
import { Button as AntButton } from 'antd';
import { NativeButtonProps } from 'antd/lib/button/button';

interface StyledButtonProps extends NativeButtonProps {
  color?: 'primary' | 'secondary';
}

export const StyledButton = styled(AntButton)<StyledButtonProps>`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.regularText};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverPrimary};
  }

  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.activePrimary};
  }

  ${({ color }) =>
    color === 'secondary' &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      background-color: ${({ theme }) => theme.colors.secondary};
      &:hover {
        background-color: ${({ theme }) => theme.colors.hoverSecondary};
      }

      &:focus,
      &:active {
        background-color: ${({ theme }) => theme.colors.activeSecondary};
      }
    `}
`;
