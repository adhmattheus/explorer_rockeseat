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

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const UserItem = styled.div`
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 0.5rem;

  p {
    margin: 0.5rem 0;
  }
`;
