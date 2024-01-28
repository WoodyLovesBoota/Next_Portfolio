import { motion } from "framer-motion";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

export default function NotFound() {
  return (
    <Wrapper>
      <Main>
        <Title>404</Title>
        <Content>원하시는 페이지를 찾을 수 없습니다.</Content>
        <Content>입력한 페이지의 주소가 정확한지 다시 한번 확인해주세요.</Content>
        <Button>
          <Link href={"/"}>홈으로 가기</Link>
        </Button>
      </Main>
      <Bg>
        <LineLeft></LineLeft>
        <Circles>
          <Circle></Circle>
          <CenterCircle />
          <InnerCircle></InnerCircle>
        </Circles>
        <LineRight></LineRight>
      </Bg>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const Content = styled.h2`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;

const Button = styled.div`
  background-color: #666;
  padding: 10px 15px;
  border-radius: 8px;
  margin-top: 50px;
  a {
    color: white;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Bg = styled.div`
  width: 100vw;
  margin-top: 150px;
  display: flex;
  align-items: center;
`;

const LineLeft = styled.div`
  width: 30%;
  height: 10px;
  background-color: gray;
`;

const LineRight = styled.div`
  width: 60%;
  height: 10px;
  background-color: gray;
`;

const blink = keyframes`
  0% { opacity: 0; }  
  50% { opacity: 1; }  
  100% { opacity: 0; } 
`;

const Circles = styled.div`
  width: 10vw;
  position: relative;
`;

const Circle = styled(motion.div)`
  width: 10vw;
  height: 10vw;
  border-radius: 1000px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${blink} 2s infinite;
  animation-delay: 1s;
  position: absolute;
  z-index: 0;
  top: -5vw;
`;

const InnerCircle = styled(motion.div)`
  width: 7vw;
  height: 7vw;
  border-radius: 1000px;
  background-color: gray;
  animation: ${blink} 2s infinite;
  animation-delay: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  top: -3.5vw;
  left: 1.5vw;
`;

const CenterCircle = styled(motion.div)`
  width: 4vw;
  height: 4vw;
  border-radius: 1000px;
  background-color: #666;
  animation: ${blink} 2s infinite;
  position: absolute;
  z-index: 2;
  top: -2vw;
  left: 3vw;
`;
