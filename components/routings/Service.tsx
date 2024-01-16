import styled from "styled-components";
import { forwardRef } from "react";
import ToggleBox from "../ToggleBox";

const Services = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <Main>
        <ToggleBox title={0} />
        <ToggleBox title={1} />
        <ToggleBox title={2} />
      </Main>
    </Wrapper>
  );
});

export default Services;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  background-color: black;
  padding-bottom: 200px;

  @media (max-width: 1500px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (max-width: 1080px) {
    padding-bottom: 150px;
  }
  @media (max-width: 745px) {
    padding-bottom: 100px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Main = styled.div`
  width: 1440px;
  border-bottom: 1px solid white;
  @media (max-width: 1500px) {
    width: 100%;
  }
`;
