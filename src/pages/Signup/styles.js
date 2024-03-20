import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  div {
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0 5rem;
      overflow: hidden;
      h2 {
        font-size: 2.2rem;
        color: var(--gray);
        margin-bottom: 10px;
      }
    }
  }
`;

export const ToLeft = keyframes`
  from {
    left: 75%;
  }
  to{
    left: 25%
  }
`;
export const ToTop = keyframes`
  from{
    top: 600%;
  }
  to {
    top: 70%;
  }
`;

export const ToBottom = keyframes`
from {
    opacity: 0;
    top: -50%;
  }
  to {
    opacity: 1;
    top: 85%;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  transition: 2s 1s ease-in-out;
  left: ${(props) => (props.isSignIn ? "75%" : "25%")};
  animation: ${ToLeft} 1s ease-in-out 1s;
  animation-direction: ${(props) => props.isSignIn && "reverse"};

  @media (max-width: 870px) {
    top: ${(props) => (props.isSignIn ? "85%" : "70%")};
    ${(props) =>
      !props.isSignIn &&
      css`
        animation: ${ToTop} 2s ease-in-out 0.7s;
      `}
    ${(props) =>
      props.isSignIn &&
      css`
        animation: ${ToBottom} 2s ease-in-out 0.7s;
      `}
    width: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
  }
`;
