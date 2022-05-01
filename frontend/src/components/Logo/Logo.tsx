import logoImage from 'assets/images/taskManagerLogo.png';

type LogoProps = {
  className?: string;
  alt?: string;
  isWithoutLogoTyp?: 'small' | 'full';
  height?: number;
};

export const Logo = ({ isWithoutLogoTyp, className, alt, height }: LogoProps) => {
  const logoClass = className ? className : 'task-manager-logo';
  const altText = alt ? alt : 'Task Manager Logo';
  const logoHeight = height ? height : 48;

  const displayLogo = <img src={logoImage} className={logoClass} alt={altText} height={logoHeight} />;

  if (isWithoutLogoTyp === 'small') {
    return displayLogo;
  }

  return (
    <div>
      {displayLogo}
      <p>Task Manager</p>
    </div>
  );
};
