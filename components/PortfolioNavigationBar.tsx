import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { languageState } from "../atoms";
import Link from "next/link";

const PortfolioNavigationBar = () => {
  const [isEng, setIsEng] = useRecoilState(languageState);

  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper istop={scrollY === 0}>
      <Link href={"/"}>
        <Logo>
          <motion.svg
            width="73"
            height="20"
            viewBox="0 0 73 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M7.79115 20V12.7767L0 0H5.07459L8.20982 5.25505L9.94225 8.20982H10.2406L11.9418 5.25505L15.0746 0H20.0602L12.269 12.7767V20H7.79115Z"
              fill="black"
              stroke={"black"}
            />
            <motion.path
              d="M26.9875 20V4.03032H20.539V0H37.9139V4.03032H31.4653V20H26.9875Z"
              fill="black"
              stroke={"black"}
            />
            <motion.path
              d="M42.6588 20L38.6309 0H43.8258L45.3489 9.01588L46.0659 15.6136H46.3956L47.6203 9.01588L49.9735 0H56.333L58.691 8.95573L59.9447 15.6136H60.2719L60.9889 8.95573L62.512 0H67.5866L63.5563 20H57.0188L54.6006 11.1333L53.2579 4.8051H52.9596L51.6169 11.1333L49.2276 20H42.6588Z"
              fill="black"
              stroke={"black"}
            />
            <motion.path
              d="M66.5736 19.9997V14.7158H72.1848V19.9997H66.5736Z"
              fill="black"
              stroke={"black"}
            />
          </motion.svg>
        </Logo>
      </Link>
      <Contents></Contents>

      <Toggles>
        {isEng ? (
          <Lang
            isnow={isEng}
            onMouseOver={() => {
              setIsToggleOpen(true);
            }}
            onMouseLeave={() => {
              setIsToggleOpen(false);
            }}
          >
            <LanguageName>
              EN
              <UnderBar />
            </LanguageName>
            <Icon>
              <FontAwesomeIcon icon={faAngleDown} />
            </Icon>
            {isToggleOpen &&
              (isEng ? (
                <ToggleList istop={scrollY === 0}>
                  <LangChoicedBar
                    onClick={() => {
                      setIsToggleOpen(false);
                    }}
                  >
                    ENGLISH
                  </LangChoicedBar>
                  <LangBar
                    onClick={() => {
                      setIsEng(false);
                      setIsToggleOpen(false);
                    }}
                  >
                    KOREAN
                  </LangBar>
                </ToggleList>
              ) : (
                <ToggleList istop={scrollY === 0}>
                  <LangChoicedBar
                    onClick={() => {
                      setIsToggleOpen(false);
                    }}
                  >
                    KOREAN
                  </LangChoicedBar>
                  <LangBar
                    onClick={() => {
                      setIsEng(true);
                      setIsToggleOpen(false);
                    }}
                  >
                    ENGLISH
                  </LangBar>
                </ToggleList>
              ))}
          </Lang>
        ) : (
          <Lang
            isnow={!isEng}
            onMouseOver={() => {
              setIsToggleOpen(true);
            }}
            onMouseLeave={() => {
              setIsToggleOpen(false);
            }}
          >
            <LanguageName>
              KR
              <UnderBar />
            </LanguageName>
            <Icon>
              <FontAwesomeIcon icon={faAngleDown} />
            </Icon>
            {isToggleOpen &&
              (isEng ? (
                <ToggleList istop={scrollY === 0}>
                  <LangChoicedBar
                    onClick={() => {
                      setIsToggleOpen(false);
                    }}
                  >
                    ENGLISH
                  </LangChoicedBar>
                  <LangBar
                    onClick={() => {
                      setIsEng(false);
                      setIsToggleOpen(false);
                    }}
                  >
                    KOREAN
                  </LangBar>
                </ToggleList>
              ) : (
                <ToggleList istop={scrollY === 0}>
                  <LangChoicedBar
                    onClick={() => {
                      setIsToggleOpen(false);
                    }}
                  >
                    KOREAN
                  </LangChoicedBar>
                  <LangBar
                    onClick={() => {
                      setIsEng(true);
                      setIsToggleOpen(false);
                    }}
                  >
                    ENGLISH
                  </LangBar>
                </ToggleList>
              ))}
          </Lang>
        )}
      </Toggles>
    </Wrapper>
  );
};

export default PortfolioNavigationBar;

const Wrapper = styled.div<{ istop: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  padding: ${(props) => (props.istop ? "24px 30px" : "17px 30px")};
  background-color: white;
  top: 0;
  z-index: 105;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.03), 0px 1px 1px 0px rgba(0, 0, 0, 0.01),
    0px 0px 50px 0px rgba(0, 0, 0, 0.07);
  transition: padding 0.3s ease-in-out;
  background-color: white;
  @media (max-width: 745px) {
    padding: 0 20px;
  }
  @media (max-width: 745px) {
    height: 65px;
  }
`;

const ToggleList = styled.div<{ istop: boolean }>`
  position: absolute;
  top: ${(props) => (props.istop ? "70px" : "60px")};
  right: 0px;
  top: 25px;
  width: 220px;
`;

const LangBar = styled.h2`
  font-size: 16px;
  line-height: 2;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  width: 100%;
  &:hover {
    background-color: #262626;
  }
  transition: background-color 0.2s ease-in-out;
`;

const LangChoicedBar = styled.h2`
  font-size: 16px;
  line-height: 2;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  width: 100%;
  &:hover {
    background-color: #262626;
  }
  transition: background-color 0.2s ease-in-out;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-left: auto;
`;

const Logo = styled.button`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border: none;
  background-color: transparent;
  letter-spacing: 1px;
  color: black;
  cursor: pointer;
`;

const Content = styled(motion.button)`
  border: none;
  background-color: white;
  cursor: pointer;
  margin-right: 30px;
  overflow: hidden;

  @media (max-width: 745px) {
    display: none;
  }
`;

const UnderBar = styled(motion.div)`
  background-color: black;
  width: 100%;
  height: 1px;
`;

const Toggles = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Lang = styled.div<{ isnow: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
`;

const LanguageName = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

const Icon = styled.h2`
  font-size: 14px;
  margin-left: 10px;
`;

const Hidden = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
`;

const Ment = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const hoverUnderVar = {
  animate: { opacity: 1, y: -0, transition: { duration: 0.3 } },
  hover: { opacity: 1, y: 20, transition: { duration: 0.3 } },
};

const hoverOverVar = {
  animate: { opacity: 1, y: -20, transition: { duration: 0.3 } },
  hover: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const hoverTargetBar = {
  animate: {},
  hover: {},
};
