import { Button } from 'antd';
import { StarFilled, StarOutlined, BorderOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { blue } from '@ant-design/colors';

export type IconButtonProps = {
  onClick(): void;
  color?: string;
  variant: 'star' | 'check';
  state: boolean;
};

export const IconButton = ({ onClick, color = blue.primary, state, variant }: IconButtonProps) => {
  const onIcon =
    variant === 'star' ? (
      <StarFilled style={{ color: color }} />
    ) : (
      <CheckSquareOutlined style={{ color: color }} />
    );
  const offIcon =
    variant === 'star' ? (
      <StarOutlined style={{ color: color }} />
    ) : (
      <BorderOutlined style={{ color: color }} />
    );

  return (
    <Button
      style={{ border: 'none' }}
      ghost={true}
      onClick={onClick}
      size={'large'}
      icon={state ? onIcon : offIcon}
    />
  );
};
