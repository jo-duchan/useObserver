import React from "react";
import styled from "styled-components";

// Custom Hook
// import { useObserver } from "custom-hook/useObserver";
import Animation from "custom-hook/Animation";

function App() {
  // const scrollObserve01 = useObserver();
  // const scrollObserve02 = useObserver();
  return (
    <Container>
      <Title>Custom Hook</Title>
      <Body>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen{" "}
        <Animation>
          <Box01 />
        </Animation>
        <Animation>
          <Box02 />
        </Animation>
      </Body>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 200vh;
`;

const Title = styled.h1`
  margin-top: 50vh;
`;

const Body = styled.div`
  font-size: 20px;
  line-height: 1.5em;
`;

const Box01 = styled.div`
  margin-top: 50vh;
  width: 100px;
  height: 100px;
  background: darkblue;
  transition: 500ms ease-in-out 200ms;
  transition-property: background, transform;
  .active & {
    background: salmon;
    transform: rotate(270deg);
  }
`;

const Box02 = styled.div`
  margin-top: 50vh;
  width: 100px;
  height: 100px;
  background: salmon;
  transition: 500ms ease-in-out 200ms;
  transition-property: background, transform;
  .active & {
    background: darkblue;
    transform: rotate(-270deg);
  }
`;
