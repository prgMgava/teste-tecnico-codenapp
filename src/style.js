import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 870px) {
    min-height: 800px;
    height: 100vh;
    flex-direction: column;
  }
`;
