import styled from 'styled-components';
import { Row, RowProps } from 'antd';

interface StyledRowProps extends RowProps {
  isDone: boolean;
}

export const StyledRow = styled(Row)<StyledRowProps>`
  background: ${({ isDone }) => (isDone ? '#eee' : 'transparent')};
`;
