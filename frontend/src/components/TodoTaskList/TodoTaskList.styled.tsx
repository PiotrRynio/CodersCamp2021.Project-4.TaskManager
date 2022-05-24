import styled from 'styled-components';

interface StyledRowProps {
  isDone: boolean;
}

export const StyledList = styled.div`
  background-color: #fff;
`;

export const StyledTodoTaskListFooter = styled.footer`
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
`;

export const StyledRow = styled.div<StyledRowProps>`
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ isDone }) => (isDone ? '#6a6a6a' : '#dadada')};
`;
