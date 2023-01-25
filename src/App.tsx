import React from "react";
import styled from "styled-components";

// Custom Hook
import { useObserver } from "custom-hook/useObserver";

function App() {
  const scrollObserve01 = useObserver();
  const scrollObserve02 = useObserver();
  return (
    <Container>
      <Title>Custom Hook</Title>
      <Body>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen{" "}
        <Trigger01 {...scrollObserve01}></Trigger01>
        <Trigger02 {...scrollObserve02}></Trigger02>
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

const Trigger01 = styled.div`
  margin-top: 50vh;
  width: 100px;
  height: 100px;
  background: greenyellow;
`;

const Trigger02 = styled.div`
  margin-top: 50vh;
  width: 100px;
  height: 100px;
  background: pink;
`;
