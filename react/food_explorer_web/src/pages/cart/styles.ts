import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > main {
    flex: 1;
    padding: 2rem;

    h1 {
      margin-bottom: 2rem;
    }
  }
`;

export const CartList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CartItem = styled.div`
display: flex;
flex-direction: column;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  p {
    margin: 0.5rem 0;
  }

  strong {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  &:hover {
    transform: scale(1.02); /* Slight zoom effect */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); /* Subtle shadow */
  }
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 1rem;
  }
`;

export const SaveCartButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    cursor: not-allowed;
  }
`;

export const TotalPrice = styled.div`
  margin-top: 2rem;

  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 1rem;
  }
`;

export const PaymentContainer = styled.div`
  max-width: 30%;
`;

export const ConfirmButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BLUE_100};
  color: ${({ theme }) => theme.COLORS.BLUE_900};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    cursor: not-allowed;
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  button {
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.BLUE_500};
    }

    &:active {
      transform: scale(0.95);
    }
  }

  span {
    font-size: 1.6rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const RemoveButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  background-color:#FF6B6B;
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  align-self: self-end;
  width: 30%;
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.RED_500};
  }

  &:active {
    transform: scale(0.95);
  }
`;
