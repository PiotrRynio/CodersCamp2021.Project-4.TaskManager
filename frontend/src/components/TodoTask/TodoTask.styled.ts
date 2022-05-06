import styled from 'styled-components';
import { Row, RowProps } from 'antd';

interface StyledRowProps extends RowProps {
  isDone: boolean;
}

export const StyledRow = styled(Row)<StyledRowProps>`
  background: ${({ theme, isDone }) => (isDone ? theme.colors.gray : theme.colors.transparent)};
`;
