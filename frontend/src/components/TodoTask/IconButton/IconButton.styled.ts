import styled from 'styled-components';
import { Button } from 'antd';
import { StarFilled, StarOutlined, BorderOutlined, CheckSquareOutlined } from '@ant-design/icons';

export const StarOn = styled(StarFilled)`
  color: ${({ theme }) => theme.colors.gold};
`;

export const StarOff = styled(StarOutlined)`
  color: ${({ theme }) => theme.colors.gold};
`;

export const CheckBoxOn = styled(CheckSquareOutlined)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const CheckBoxOff = styled(BorderOutlined)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledButton = styled(Button)`
  border: none;
`;
