import { ButtonHTMLAttributes, ReactNode, MouseEvent } from 'react';
import { StyledButton } from './Button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  htmlType: 'button' | 'submit' | 'reset';
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  size?: 'small' | 'large';
  ghost?: boolean;
}

export const Button = ({ children, htmlType, handleClick, disabled, variant, size, ghost }: ButtonProps) => {
  return (
    <StyledButton
      htmlType={htmlType}
      onClick={handleClick}
      disabled={disabled}
      variant={variant}
      size={size}
      ghost={ghost}
    >
      {children ? <div>{children}</div> : null}
    </StyledButton>
  );
};
