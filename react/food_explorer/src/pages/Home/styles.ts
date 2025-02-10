import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
  margin: 12rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: linear-gradient(
    180deg,
    rgba(9, 30, 38, 1) 0%,
    rgba(0, 19, 28, 1) 99%
  );
  border-radius: 0.8rem;
  height: 20rem;

  position: relative;
  padding: 2rem 10rem;

  > img {
    position: absolute;
    left: -6rem;
    top: 25%;
    transform: translateY(-50%);
    width: 51rem;
    z-index: 1;
  }

  > div {
    position: relative;
    z-index: 2;
    text-align: left;
    max-width: 50%;
    color: white;

    span {
      font-size: 4.3rem;
    }

    p {
      font-size: 1.5rem;
      opacity: 0.8;
    }
  }
`;
