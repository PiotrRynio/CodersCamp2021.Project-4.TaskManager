import { Typography as AntTypography } from 'antd';

const { Title, Paragraph, Text } = AntTypography;

export interface TypographyProps {
  children: React.ReactNode;
  variant: 'title' | 'paragraph' | 'text';
  level?: 1 | 2 | 3 | 4 | 5;
  type?: 'secondary' | 'success' | 'warning' | 'danger';
  strong?: boolean;
  italic?: boolean;
}

export const Typography = ({ children, variant, level, type, strong, italic }: TypographyProps) => {
  return (
    <>
      {variant === 'title' && (
        <Title level={level} type={type} italic={italic}>
          {children}
        </Title>
      )}
      {variant === 'paragraph' && (
        <Paragraph type={type} strong={strong} italic={italic}>
          {children}
        </Paragraph>
      )}
      {variant === 'text' && (
        <Text type={type} strong={strong} italic={italic}>
          {children}
        </Text>
      )}
    </>
  );
};
