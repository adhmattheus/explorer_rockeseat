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
  margin-bottom: 1rem;
  background: none;
  border: none;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  cursor: pointer;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const OrderItem = styled.div`
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 0.5rem;

  p {
    margin: 0.5rem 0;
  }

  ul {
    margin-top: 0.5rem;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;
