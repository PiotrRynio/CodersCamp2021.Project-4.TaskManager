import { Wrapper, TextLogo, LogoStyle } from './Logo.styled';
import logoImage from 'assets/images/taskManagerLogo.png';

type LogoProps = {
  isWithoutLogoTyp?: 'small' | 'full';
  height?: number;
};

export const Logo = ({ isWithoutLogoTyp, height }: LogoProps) => {
  const logoHeight = height ? height : 48;

  if (isWithoutLogoTyp === 'small') {
    return <LogoStyle src={logoImage} alt="Task manager application logo" height={logoHeight} />;
  }

  return (
    <Wrapper>
      <LogoStyle src={logoImage} alt="Task manager application logo" height={logoHeight} />
      <TextLogo>Task Manager</TextLogo>
    </Wrapper>
  );
};
