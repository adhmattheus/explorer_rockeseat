import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  > label {
    font-weight: 400;
    text-align: start;
    font-size: 1.6rem;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const Field = styled.div`
  width: 100%;

  height: 4.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.4rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: 1px solid ${({ theme }) => theme.COLORS.white};

  > input {
    width: 100%;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    border-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.WHITE};

    background-color: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
