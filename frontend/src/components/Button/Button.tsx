import { ReactNode, MouseEvent } from 'react';
import { StyledButton } from './Button.styled';
import { NativeButtonProps } from 'antd/lib/button/button';

interface ButtonProps extends NativeButtonProps {
  children: ReactNode;
  htmlType: 'button' | 'submit' | 'reset';
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  isDisabled?: boolean;
  size?: 'small' | 'large';
  ghost?: boolean;
  shape?: 'circle' | 'round';
  color?: 'primary' | 'secondary';
}

export const Button = ({
  children,
  htmlType,
  handleClick,
  type,
  isDisabled,
  size,
  ghost,
  shape,
  color,
}: ButtonProps) => {
  console.log(children);
  return (
    <StyledButton
      htmlType={htmlType}
      onClick={handleClick}
      type={type}
      disabled={isDisabled}
      size={size}
      ghost={ghost}
      shape={shape}
      color={color}
    >
      {children ? children : null}
    </StyledButton>
  );
};
