import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: stretch;
  padding: 0 12rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
  margin-bottom: 14rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 12rem;
    justify-content: center;
    margin-bottom: 0;
    img {
      width: 80%;
      margin-top: 2rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  padding: 6rem 8rem;
  text-align: center;
  border-radius: 8px;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    padding: 4rem 2rem;
    background-color: transparent;
  }
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

    @media (max-width: 768px) {
      display: none;
    }
  }

  > a {
    margin-top: 3rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const InputContent = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
