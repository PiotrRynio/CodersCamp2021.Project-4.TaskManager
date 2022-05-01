import logoSmall from 'assets/images/logoSmall.png';
import logoFull from 'assets/images/logoFull.png';

type LogoProps = {
  className?: string;
  alt?: string;
  isWithoutLogoTyp?: 'small' | 'full';
  height?: number;
};

export const Logo = ({ isWithoutLogoTyp, className, alt, height }: LogoProps) => {
  const logo = isWithoutLogoTyp === 'small' ? logoSmall : logoFull;
  const logoClass = className ? className : 'to-do-logo';
  const altText = alt ? alt : 'To Do Logo';
  const logoHeight = height ? height : 48;

  return <img src={logo} className={logoClass} alt={altText} height={logoHeight} />;
};
