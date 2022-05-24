import styled from 'styled-components';

interface StyledRowProps {
  isDone: boolean;
}

export const StyledRow = styled.div<StyledRowProps>`
  display: flex;
  background: ${({ theme, isDone }) => (isDone ? theme.colors.doneTaskBackground : theme.colors.transparent)};
`;
