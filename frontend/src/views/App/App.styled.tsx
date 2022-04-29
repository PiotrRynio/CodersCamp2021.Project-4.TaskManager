import styled from 'styled-components';

export const StyledComponent = styled.div`
  ${({ theme }) => theme.mixins.typography.regular}
`;
