import { StyledButton, StarOn, StarOff, CheckBoxOn, CheckBoxOff } from './IconButton.styled';

export type IconButtonProps = {
  onClick(): void;
  variant: 'star' | 'check';
  isOn: boolean;
};

export const IconButton = ({ onClick, isOn, variant }: IconButtonProps) => {
  let onIcon;
  let offIcon;

  switch (variant) {
    case 'star':
      onIcon = <StarOn />;
      offIcon = <StarOff />;
      break;
    case 'check':
      onIcon = <CheckBoxOn />;
      offIcon = <CheckBoxOff />;
      break;
  }

  return <StyledButton ghost={true} onClick={onClick} size="large" icon={isOn ? onIcon : offIcon} />;
};
