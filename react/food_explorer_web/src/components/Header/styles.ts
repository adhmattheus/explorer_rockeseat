import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  padding: 3rem 12rem;
  align-items: center;
  min-height: 10rem;
  gap: 3rem;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Logout = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const InputButton = styled.div`
  width: 30rem;
`;
