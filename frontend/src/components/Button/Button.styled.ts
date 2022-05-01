import styled, { css } from 'styled-components';
import { Button as AntButton } from 'antd';
import { NativeButtonProps } from 'antd/lib/button/button';

interface StyledButtonProps extends NativeButtonProps {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  size?: 'small' | 'large';
  ghost?: boolean;
}

export const StyledButton = styled(AntButton)<StyledButtonProps>`
  cursor: pointer;
  font-size: 1rem;
  width: 120px;
  min-height: 30px;
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.regularText};
      &:hover {
        background-color: ${({ theme }) => theme.colors.btnHoverPrimary};
      }
      &:focus,
      &:active {
        background-color: ${({ theme }) => theme.colors.btnActivePrimary};
      }
    `}
  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.regularText};
      &:hover {
        background-color: ${({ theme }) => theme.colors.btnHoverSecondary};
      }
      &:focus,
      &:active {
        background-color: ${({ theme }) => theme.colors.btnActiveSecondary};
      }
    `}
  ${(props) =>
    props.disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.disabled};
    `}
    ${(props) =>
    props.size === 'small' &&
    css`
      font-size: 0.8rem;
      width: 70px;
      padding: 0.2rem;
    `}
    ${(props) =>
    props.size === 'large' &&
    css`
      font-size: 1.2rem;
      width: 140px;
      padding: 0.5rem 1rem;
    `}
${(props) =>
    props.ghost &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.primary};
      background-color: transparent;
      box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.26);
    `}
`;
