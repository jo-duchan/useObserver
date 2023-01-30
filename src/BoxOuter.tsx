import { useState } from "react";
import styled from "styled-components";

// Component
import Observer from "custom-hook/Observer";

interface Props {
  index: number;
}

function BoxOuter({ index }: Props) {
  const [option, setOption] = useState<boolean>(true);

  return (
    <Container>
      <Label>
        {`Threshold: ${(index * 0.2).toFixed(1)}, iteration: ${option}`}
      </Label>
      <Observer
        threshold={index * 0.2}
        iteration={option}
        className="active33"
        // onIntersect={(val) => console.log(val)}
      >
        <Box onClick={() => setOption(!option)} />
      </Observer>
    </Container>
  );
}

export default BoxOuter;

const Container = styled.div`
  margin-top: 50vh;
`;

const Label = styled.span`
  display: inline-block;
  margin-bottom: 50px;
  font-size: 20px;
  font-weight: 600;
  color: #101010;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  background: #dfdfdf;
  transition: 600ms ease-in-out;
  transition-property: background, transform;
  .active & {
    background: #0037ff;
    transform: translate3d(200%, 0, 0);
  }
`;
