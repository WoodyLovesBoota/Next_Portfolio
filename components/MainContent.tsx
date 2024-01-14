import styled, { keyframes } from "styled-components";
import { forwardRef, useRef } from "react";
import { motion } from "framer-motion";

import Bg from "./assets/bg.svg";
import Arrow from "./assets/arrow.svg";

const MainContent = forwardRef<HTMLDivElement>((props, ref) => {
  const arrowRef = useRef<HTMLDivElement>(null);

  const onServiceClick = () => {
    arrowRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Wrapper ref={ref}>
      <Background>
        <BgWrapper>
          <Bg height={200} />
        </BgWrapper>
        <BlackBox />
      </Background>
      <Main>
        <Introduce>
          <TitleBox>
            {"YANG".split("").map((char, ind) => {
              return (
                <NameSpanFirst index={ind} key={ind}>
                  {char}
                </NameSpanFirst>
              );
            })}
          </TitleBox>
          <TitleBox>
            {"TAEWOOK".split("").map((char, ind) => {
              return (
                <NameSpanSecond index={ind} key={ind}>
                  {char}
                </NameSpanSecond>
              );
            })}
          </TitleBox>
          <SubTitle>
            <h2>FRONT-END WEB DEVELOPER </h2>& BLOCKCHAIN DEVELOPER
          </SubTitle>
        </Introduce>
        <Links>
          <Column>
            <LinkContent
              variants={hoverVar}
              animate="animate"
              whileHover={"hover"}
              target="_blank"
              href="https://github.com/WoodyLovesBoota"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                <motion.path
                  d="M12.9669 22.4133C12.9693 22.679 12.9712 22.886 12.9712 23H18.0261C18.0261 22.89 18.0274 22.6973 18.0292 22.4399L18.0292 22.4392L18.0292 22.4385C18.0327 21.919 18.0379 21.1363 18.0379 20.2359C18.0379 19.295 17.7123 18.6828 17.3479 18.3692C19.6155 18.1206 21.9995 17.2682 21.9995 13.3997C22.0149 12.3971 21.6383 11.4273 20.9484 10.6923C21.053 10.4354 21.4023 9.41115 20.8472 8.02323C20.8472 8.02323 19.9934 7.75299 18.0481 9.05583C16.378 8.60428 14.6159 8.60428 12.9459 9.05583C10.9988 7.75299 10.1434 8.02323 10.1434 8.02323C9.58998 9.41448 9.93924 10.4387 10.0438 10.6923C9.35609 11.4272 8.98035 12.3953 8.99438 13.3964C8.99438 17.2565 11.3734 18.1206 13.6376 18.3742C13.3457 18.6261 13.0808 19.0698 12.9897 19.7221C12.4093 19.9823 10.933 20.4277 10.0253 18.888C10.0253 18.888 9.48706 17.9204 8.46292 17.8487C8.46292 17.8487 7.46913 17.837 8.39373 18.4609C8.39373 18.4609 9.06188 18.7679 9.52418 19.9356C9.52418 19.9356 10.1231 21.7339 12.9577 21.125C12.9596 21.6045 12.9637 22.0606 12.9669 22.4133Z"
                  fill="#ffffff"
                  strokeWidth="12"
                  strokeLinecap="round"
                  variants={svgVar}
                />
              </svg>
            </LinkContent>
            <LinkContent
              variants={hoverVar}
              animate="animate"
              whileHover={"hover"}
              target="_blank"
              href="https://www.linkedin.com/in/tae-wook-yang-6762092a2/"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                <motion.path
                  d="M11.375 22H8.1875V11.9688H11.375V22ZM9.78125 10.5625C8.75 10.5625 8 9.8125 8 8.78125C8 7.75 8.84375 7 9.78125 7C10.8125 7 11.5625 7.75 11.5625 8.78125C11.5625 9.8125 10.8125 10.5625 9.78125 10.5625ZM23 22H19.8125V16.5625C19.8125 14.9688 19.1562 14.5 18.2187 14.5C17.2812 14.5 16.3437 15.25 16.3437 16.6562V22H13.1562V11.9688H16.1562V13.375C16.4375 12.7188 17.5625 11.6875 19.1562 11.6875C20.9375 11.6875 22.8125 12.7187 22.8125 15.8125V22H23Z"
                  fill="#ffffff"
                  strokeWidth="12"
                  strokeLinecap="round"
                  variants={svgVar}
                />
              </svg>
            </LinkContent>
            <LinkContent
              variants={hoverVar}
              animate="animate"
              whileHover={"hover"}
              target="_blank"
              href="https://velog.io/@woodylovescoding"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                <motion.path
                  d="M14.8698 22.7946L12.0142 23L9.81064 10.6285H7V9.35029L10.6651 8.27749C12.6618 7.69316 13.3108 8.93183 13.3858 9.6242L15.1396 19.7359C16.8935 17.499 18.2201 15.011 18.7148 13.2763C19.2094 11.5416 18.5798 11.0166 18.2875 10.6285C18.0537 10.3181 17.2607 9.82963 16.8935 9.6242C17.7479 7.95793 21.8402 6.70253 21.9976 10.4231C22.1235 13.3996 17.2982 19.9109 14.8698 22.7946Z"
                  fill="#ffffff"
                  strokeWidth="12"
                  strokeLinecap="round"
                  variants={svgVar}
                />
              </svg>
            </LinkContent>
          </Column>
          <ArrowBox ref={arrowRef} onClick={onServiceClick}>
            <Arrow />
          </ArrowBox>
        </Links>
      </Main>
    </Wrapper>
  );
});

export default MainContent;

const typing = keyframes`
  from {
    transform: translateY(40px);
    opacity: 0;
    visibility: hidden; 

  }
  1% {
    visibility: visible;
  }
  to {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;

  }
`;

const blink = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
    visibility: hidden; 
  }
  1% {
    visibility: visible;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  `;

const SubTitle = styled.div`
  animation: ${typing} 1s ease-in-out forwards;
  animation-delay: 0.5s;
  visibility: hidden;
  font-size: 20px;
  color: white;
  font-weight: 400;
  word-break: normal;
  font-weight: 400;
  line-height: 24.2px;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  & h2 {
    font-size: 20px;
    color: white;
    font-weight: 400;
    word-break: normal;
    font-weight: 400;
    line-height: 24.2px;
    letter-spacing: 1px;
    margin-right: 6px;
  }
  @media (max-width: 745px) {
    display: block;
  }
`;

const NameSpanFirst = styled.span<{ index: number }>`
  animation: ${blink} 1s ease-in-out forwards;
  animation-delay: ${(props) => props.index * 0.05}s;
  font-size: 150px;
  color: white;
  font-weight: 400;
  font-family: ClashGrotesk-Medium;
  line-height: 0.9;
  letter-spacing: 3px;
  display: inline-block;
  text-align: center;
  visibility: hidden;
  @media (max-width: 1500px) {
    font-size: 10.42vw;
  }
  @media (max-width: 745px) {
    font-size: 60px;
  }
`;

const NameSpanSecond = styled.span<{ index: number }>`
  color: white;
  animation: ${blink} 1s ease-in-out forwards;
  animation-delay: ${(props) => props.index * 0.05 + 0.3}s;
  font-size: 150px;
  font-weight: 400;
  font-family: ClashGrotesk-Medium;
  line-height: 0.9;
  letter-spacing: 3px;
  margin-bottom: 72px;
  display: inline-block;
  text-align: center;
  visibility: hidden;

  @media (max-width: 1500px) {
    font-size: 10.42vw;
  }
  @media (max-width: 745px) {
    font-size: 60px;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  @media (max-width: 1920px) {
    background-color: transparent;
  }
`;

const BgWrapper = styled.div`
  display: flex;
  margin-bottom: calc(-97.5px + 5vw);
  @media (max-width: 1500px) {
    margin-bottom: calc(-99.5px + 5vw);
  }
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  padding-top: calc(85px + 5vw);
  @media (max-width: 1080px) {
    padding-top: calc(10vw + 25px);
  }
  @media (max-width: 375px) {
    padding-top: calc(22px + 5vw);
  }
`;

const BlackBox = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
`;

const Main = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-top: 40vh;
  z-index: 3;
  background: linear-gradient(to top, black 50%, transparent 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 745px) {
    padding-top: max(40vh, 170px);
  }
`;

const Introduce = styled.div`
  text-align: center;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Links = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  background-color: black;

  @media (max-width: 745px) {
    padding: 0 20px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkContent = styled(motion.a)`
  margin-bottom: 14px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

const shake = keyframes`
    0%, 100% {
    transform: translateY(-20px);
  }

  50% {
    transform: translateY(-40px);
  }
`;

const ArrowBox = styled.div`
  animation: ${shake} 1s ease-in-out infinite;
  cursor: pointer;
`;

const hoverVar = {
  animate: { backgroundColor: "#000000", fill: "#000000" },
  hover: { backgroundColor: "#ffffff", fill: "#000000" },
};

const svgVar = {
  animate: { fill: "#ffffff" },
  hover: { fill: "#000000" },
};
