import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  height: 56px;
  width: 100%;
  padding: 0 20px;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Logo = styled.div`
  position: fixed;
  left: 0;
  padding-left: 20px;
`;
