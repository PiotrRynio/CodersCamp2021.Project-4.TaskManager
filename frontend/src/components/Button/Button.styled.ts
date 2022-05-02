import styled, { css } from 'styled-components';
import { Button as AntButton } from 'antd';
import { NativeButtonProps } from 'antd/lib/button/button';

interface StyledButtonProps extends NativeButtonProps {
  color?: 'primary' | 'secondary';
}

export const StyledButton = styled(AntButton)<StyledButtonProps>`
  ${(props) =>
    props.color === 'primary' &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.regularText};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      &:hover {
        background-color: ${({ theme }) => theme.colors.hoverPrimary};
        color: ${({ theme }) => theme.colors.regularText};
        border: 1px solid ${({ theme }) => theme.colors.primary};
      }
      &:focus,
      &:active {
        background-color: ${({ theme }) => theme.colors.activePrimary};
        color: ${({ theme }) => theme.colors.regularText};
        border: 1px solid ${({ theme }) => theme.colors.primary};
      }
    `}
  ${(props) =>
    props.color === 'secondary' &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.regularText};
      border: 1px solid ${({ theme }) => theme.colors.secondary};

      &:hover {
        background-color: ${({ theme }) => theme.colors.hoverSecondary};
        color: ${({ theme }) => theme.colors.regularText};
        border: 1px solid ${({ theme }) => theme.colors.secondary};
      }
      &:focus,
      &:active {
        background-color: ${({ theme }) => theme.colors.activeSecondary};
        color: ${({ theme }) => theme.colors.regularText};
        border: 1px solid ${({ theme }) => theme.colors.secondary};
      }
    `}
`;
