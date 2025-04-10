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
  &:hover {
    cursor: pointer;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const InputButton = styled.div`
  width: 15rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;  
`;

export const CartIcon = styled.div`
  position: relative;
  cursor: pointer;

  > span {
    position: absolute;
    top: -0.5rem;
    right: -1.2rem;
    background-color: ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 50%;
    padding: 0.2rem 0.6rem;
  }
`;