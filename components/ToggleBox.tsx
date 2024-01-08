import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";

import Plus from "./assets/plus.svg";
import Minus from "./assets/minus.svg";

import { languageState } from "../atoms";

// import "../public/fonts/font.css";

const ToggleBox = ({ title }: { title: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isEng, setIsEng] = useRecoilState(languageState);

  return (
    <Wrapper>
      <ToggleHeader
        variants={hoverTargetVar}
        animate="animate"
        whileHover={"hover"}
        onClick={() => {
          setIsOpen((current) => !current);
        }}
      >
        <ToggleTitle>
          {title === 0 ? "SKILLS" : title === 1 ? "CAREER" : "EDUCATION"}
          <Circle variants={hoverVar} />
        </ToggleTitle>
        {isOpen ? (
          <ToggleButtonMinus key={"minus"} variants={rotateVar} initial="initial" animate="animate">
            <Minus />
          </ToggleButtonMinus>
        ) : (
          <ToggleButtonPlus key={"plus"} variants={rotateVar} initial="initial" animate="animate">
            <Plus />
          </ToggleButtonPlus>
        )}
      </ToggleHeader>
      <AnimatePresence mode="wait">
        {isOpen && (
          <ToggleContent
            key={"a"}
            variants={toggleVar}
            initial="initial"
            animate="animate"
            exit={"exit"}
          >
            <ContentBox
              key={"b"}
              variants={contentVar}
              initial="initial"
              animate="animate"
              exit={"exit"}
            >
              {title === 0 ? (
                <ContentToggle>
                  <ContentRow>
                    <ContentTitle>FRONT-END</ContentTitle>
                    {isEng ? (
                      <ContentDescription>
                        I can design and develop web projects using HTML, CSS, JavaScript, and
                        React. I am able to write modular code through a component-based
                        architecture, and utilize core concepts such as state management and
                        routing.
                      </ContentDescription>
                    ) : (
                      <ContentDescription>
                        HTML, CSS, JavaScript와 React를 활용하여 웹 프로젝트를 설계하고 개발할 수
                        있습니다. 컴포넌트 기반 아키텍처를 통해 모듈화된 코드를 작성할 수 있고, 상태
                        관리와 라우팅 등의 핵심 개념을 활용할 수 있습니다.
                      </ContentDescription>
                    )}
                  </ContentRow>
                  <ContentRow>
                    <ContentTitle>BLOCKCHAIN</ContentTitle>
                    {isEng ? (
                      <ContentDescription>
                        I am capable of designing and implementing smart contracts on the Ethereum
                        platform using the Solidity language. Additionally, based on my experience
                        in the field of smart contract security audits, I can meticulously review
                        code to contribute to the stability of the project.
                      </ContentDescription>
                    ) : (
                      <ContentDescription>
                        Solidity 언어를 사용하여 이더리움 플랫폼에서 스마트 컨트랙트를 설계하고
                        구현할 수 있습니다. 또한 스마트 컨트랙트 보안 감사 분야에서의 경험을
                        바탕으로 코드를 꼼꼼하게 검토하여 프로젝트의 안정성을 높이는 데 기여할 수
                        있습니다.
                      </ContentDescription>
                    )}
                  </ContentRow>
                </ContentToggle>
              ) : title === 1 ? (
                <ContentToggle>
                  <ContentRow>
                    <CareerTitle>NOV, 2020 - DEC, 2021</CareerTitle>
                    <CareerBox>
                      {isEng ? (
                        <CareerName>
                          Haechi Labs Smart Contract Development and Security Audit
                        </CareerName>
                      ) : (
                        <CareerName>Haechi Labs 스마트 컨트랙트 개발 및 보안감사</CareerName>
                      )}
                      {isEng ? (
                        <ContentDescription>
                          Through more than 50 security audits, I have identified and resolved code
                          vulnerabilities, thereby enhancing the platform's security. Additionally,
                          I have designed and implemented smart contracts in various fields such as
                          DeFi, NFT, Dapp, and ERC20, utilizing Solidity
                        </ContentDescription>
                      ) : (
                        <ContentDescription>
                          50회 이상의 security audit을 통해 코드의 보안 취약성을 식별하고, 이를
                          해결하여 플랫폼의 안전성을 향상시켰습니다. 또한 Solidity를 활용하여 Defi,
                          NFT, Dapp, ERC20 등 다양한 분야의 스마트 컨트랙트를 설계하고
                          구현하였습니다.
                        </ContentDescription>
                      )}
                    </CareerBox>
                  </ContentRow>
                </ContentToggle>
              ) : (
                <ContentToggle>
                  <ContentRow>
                    <CareerTitle>MAR, 2015 - FEB, 2021</CareerTitle>
                    <CareerBox>
                      {isEng ? (
                        <CareerName>
                          Bachelor of Electrical and Computer Engineering, College of Engineering,
                          Seoul National University
                        </CareerName>
                      ) : (
                        <CareerName>서울대학교 공과대학 전기정보공학 학사</CareerName>
                      )}{" "}
                      {isEng ? (
                        <ContentDescription>
                          While studying at the Department of Electrical and Computer Engineering at
                          Seoul National University, I majored in software engineering to build my
                          knowledge in software development. I learned various programming languages
                          such as C, C++, Java, Python, and JavaScript, along with foundational
                          subjects in software engineering like data structures, algorithms,
                          computer architecture, and networks. In addition, I also studied modern
                          software technologies including blockchain, machine learning, and data
                          communications.
                        </ContentDescription>
                      ) : (
                        <ContentDescription>
                          서울대학교 전기정보 공학부 재학 중 소프트웨어 공학을 세부전공하여
                          소프트웨어 개발과 관련된 지식을 쌓았습니다. C, C++, Java, Python,
                          Javascript 등 다양한 프로그래밍 언어를 학습하였고, 자료구조, 알고리즘,
                          컴퓨터 구조, 네트워크 등 소프트웨어 공학의 기초와 더불어 블록체인,
                          머신러닝, 데이터 통신 등 현대적인 소프트웨어 기술을 학습하였습니다.
                        </ContentDescription>
                      )}
                    </CareerBox>
                  </ContentRow>
                </ContentToggle>
              )}
            </ContentBox>
          </ToggleContent>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default ToggleBox;

const Wrapper = styled(motion.div)`
  border-top: 1px solid white;
  width: 100%;
`;

const ToggleContent = styled(motion.div)`
  z-index: 0;
`;

const ToggleHeader = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 2;
  cursor: pointer;
  padding: 36px 0;
  background-color: black;
`;

const ToggleButtonPlus = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleButtonMinus = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleTitle = styled.h2`
  color: white;
  font-family: ClashGrotesk-Regular;
  font-size: 28px;
  line-height: normal;
  display: flex;
`;

const Circle = styled(motion.div)`
  width: 5px;
  height: 5px;
  border-radius: 100px;
  background-color: white;
  margin-left: 12px;
`;

const ContentTitle = styled.h2`
  color: white;
  width: 300px;
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  @media (max-width: 1080px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

const ContentDescription = styled.h2`
  color: white;
  width: 1000px;
  font-size: 16px;
  font-weight: 400;
  line-height: 2;
  display: inline-block;
  word-break: break-all;
  @media (max-width: 1500px) {
    width: 70vw;
  }
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const ContentBox = styled(motion.div)``;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
  @media (max-width: 1080px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

const ContentToggle = styled.div``;

const CareerBox = styled.div`
  white-space: pre-wrap;
  margin-left: 100px;
  @media (max-width: 1500px) {
    width: 70vw;
  }
  @media (max-width: 1080px) {
    width: 100%;
    margin-left: 0;
  }
`;

const CareerTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 2;
  color: white;
  width: 300px;
  white-space: nowrap;
  @media (max-width: 1080px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

const CareerName = styled.h2`
  color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 2;
  margin-bottom: 16px;
  width: 1000px;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const toggleVar = {
  initial: { height: "0px" },
  animate: { height: "auto" },
  exit: { height: "0px", transition: {} },
};

const contentVar = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 0.2 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.1 } },
};

const hoverTargetVar = {
  animate: {},
  hover: {},
};

const hoverVar = {
  animate: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.7 } },
};

const rotateVar = {
  initial: { rotate: -90 },
  animate: { rotate: 0, transition: { type: "tween", duration: 0.2 } },
};
