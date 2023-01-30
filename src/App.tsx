import styled from "styled-components";

// Component
import BoxOuter from "BoxOuter";

function App() {
  return (
    <Container>
      <Title>React Custom Observer Demo</Title>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen{" "}
      </Description>
      <Body>
        {[...Array(6)].map((x, i: number) => (
          <BoxOuter key={i} index={i} />
        ))}
      </Body>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  padding: 7vw;
  height: auto;
  box-sizing: border-box;
`;

const Title = styled.h1`
  color: #101010;
`;

const Description = styled.p`
  width: 50%;
  font-size: 16px;
  line-height: 1.5em;
  color: #303030;
`;

const Body = styled.div`
  margin-top: 80vh;
  margin-bottom: 10vh;
`;
