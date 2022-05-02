import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  overflow: hidden;

  height: 56px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.secondary};
`;
