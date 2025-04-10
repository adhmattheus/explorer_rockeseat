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

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.6rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const OrderList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const OrderItem = styled.div`
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

  ul {
    margin-top: 1rem;
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
