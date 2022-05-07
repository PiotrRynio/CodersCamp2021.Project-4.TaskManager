import styled from 'styled-components';
import { Image } from 'antd';

export const LogoStyle = styled(Image)`
  padding: 0 5px 0 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TextLogo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0;
`;
