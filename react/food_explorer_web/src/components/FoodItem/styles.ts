import styled from "styled-components";

export const Container = styled.div`
  max-width: 21rem;
  height: 29.2rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};
  border: 2px solid ${({ theme }) => theme.COLORS.BLUE_500};
  border-radius: 0.8rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  position: relative;

  svg {
    cursor: pointer;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }

  > img {
    max-width: 8.8rem;

    cursor: pointer;
  }

  > span {
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
  }

  @media (min-width: 1024px) {
    max-width: 30.4rem;
    height: 46.2rem;

    gap: 1.5rem;

    > svg {
      right: 1.8rem;
    }

    > img {
      max-width: 17.6rem;
    }

    > p {
      font-size: 1.4rem;
      line-height: 160%;
      text-align: center;

      color: ${({ theme }) => theme.COLORS.GRAY_100};
      overflow: hidden;
    }

    > span {
      font-size: 3.2rem;
      line-height: 160%;
    }
  }
`;

export const Title = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  > h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    text-align: center;

    width: 100%;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 1024px) {
    > h2 {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 140%;
    }
  }
`;

export const Order = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  > button {
    padding: 0.4rem 2.4rem;
  }

  @media (min-width: 1024px) {
    width: fit-content;
    flex-direction: row;

    > button {
      padding: 1.2rem 2.4rem;
    }
  }
`;

export const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  color: ${({ theme }) => theme.COLORS.WHITE_100};

  button {
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (min-width: 1024px) {
    svg,
    span {
      font-weight: 700;
      font-size: 2rem;
      line-height: 160%;
    }
  }
`;
