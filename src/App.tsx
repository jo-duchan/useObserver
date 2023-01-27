import styled from "styled-components";

// Component
import Observer from "custom-hook/Observer";

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
        {[...Array(6)].map((x, i) => (
          <BoxOuter key={i}>
            <Label>Threshold {(i * 0.2).toFixed(1)}</Label>
            <Observer threshold={i * 0.2}>
              <Box />
            </Observer>
          </BoxOuter>
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

const Label = styled.span`
  display: inline-block;
  margin-bottom: 50px;
  font-size: 20px;
  font-weight: 600;
  color: #101010;
`;

const BoxOuter = styled.div`
  margin-top: 50vh;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  background: #35dea9;
  transition: 500ms ease-in-out 200ms;
  transition-property: background, transform;
  .active & {
    background: #0037ff;
    transform: translate3d(200%, 0, 0);
  }
`;
