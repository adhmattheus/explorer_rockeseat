import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: stretch;
  padding: 0 12rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
  margin-bottom: 14rem;
`;

export const Content = styled.div`
  width: 100%;
  margin: auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  padding: 6rem 8rem;
  text-align: center;
  border-radius: 8px;
  flex: 1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};

  > h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > span {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  > a {
    margin-top: 3rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const InputContent = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
