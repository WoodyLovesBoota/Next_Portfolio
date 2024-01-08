import styled from "styled-components";
import { useRecoilState } from "recoil";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { languageState } from "../atoms";

const NavigationBar = ({
  onMainClick,
  onPortfolioClick,
  onBlogClick,
  onContactClick,
  onServiceClick,
  serviceRef,
  mainRef,
  portFolioRef,
  contactRef,
  blogRef,
}: INavProps) => {
  const [isEng, setIsEng] = useRecoilState(languageState);

  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isnow, setIsnow] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      mainRef.current?.scrollHeight &&
      serviceRef.current?.scrollHeight &&
      portFolioRef.current?.scrollHeight &&
      blogRef.current?.scrollHeight &&
      contactRef.current?.scrollHeight
    ) {
      if (scrollY < mainRef.current?.scrollHeight - 200) setIsnow(0);
      else if (
        scrollY > mainRef.current?.scrollHeight - 200 &&
        scrollY < mainRef.current?.scrollHeight + serviceRef.current.scrollHeight - 200
      ) {
        setIsnow(1);
      } else if (
        scrollY > mainRef.current?.scrollHeight + serviceRef.current.scrollHeight - 200 &&
        scrollY <
          mainRef.current?.scrollHeight +
            portFolioRef.current.scrollHeight +
            serviceRef.current.scrollHeight -
            200
      ) {
        setIsnow(2);
      } else if (
        scrollY >
          mainRef.current?.scrollHeight +
            portFolioRef.current.scrollHeight +
            serviceRef.current.scrollHeight -
            200 &&
        scrollY <
          mainRef.current?.scrollHeight +
            portFolioRef.current.scrollHeight +
            blogRef.current.scrollHeight +
            serviceRef.current.scrollHeight -
            200
      ) {
        setIsnow(3);
      } else if (
        scrollY >
        mainRef.current?.scrollHeight +
          portFolioRef.current.scrollHeight +
          blogRef.current.scrollHeight +
          serviceRef.current.scrollHeight -
          200
      ) {
        setIsnow(4);
      }
    }
  }, [scrollY]);

  return (
    <Wrapper istop={scrollY === 0}>
      <Logo onClick={onMainClick}>
        <motion.svg
          width="73"
          height="20"
          viewBox="0 0 73 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, fill: "rgba(0,0,0,0)" }}
            animate={{ pathLength: 1, fill: "rgba(0,0,0,1)", transition: { duration: 4 } }}
            d="M7.79115 20V12.7767L0 0H5.07459L8.20982 5.25505L9.94225 8.20982H10.2406L11.9418 5.25505L15.0746 0H20.0602L12.269 12.7767V20H7.79115Z"
            fill="transparent"
            stroke={"black"}
          />
          <motion.path
            initial={{ pathLength: 0, fill: "rgba(0,0,0,0)" }}
            animate={{ pathLength: 1, fill: "rgba(0,0,0,1)", transition: { duration: 4 } }}
            d="M26.9875 20V4.03032H20.539V0H37.9139V4.03032H31.4653V20H26.9875Z"
            fill="transparent"
            stroke={"black"}
          />
          <motion.path
            initial={{ pathLength: 0, fill: "rgba(0,0,0,0)" }}
            animate={{ pathLength: 1, fill: "rgba(0,0,0,1)", transition: { duration: 4 } }}
            d="M42.6588 20L38.6309 0H43.8258L45.3489 9.01588L46.0659 15.6136H46.3956L47.6203 9.01588L49.9735 0H56.333L58.691 8.95573L59.9447 15.6136H60.2719L60.9889 8.95573L62.512 0H67.5866L63.5563 20H57.0188L54.6006 11.1333L53.2579 4.8051H52.9596L51.6169 11.1333L49.2276 20H42.6588Z"
            fill="transparent"
            stroke={"black"}
          />
          <motion.path
            initial={{ pathLength: 0, fill: "rgba(0,0,0,0)" }}
            animate={{ pathLength: 1, fill: "rgba(0,0,0,1)", transition: { duration: 4 } }}
            d="M66.5736 19.9997V14.7158H72.1848V19.9997H66.5736Z"
            fill="transparent"
            stroke={"black"}
          />
        </motion.svg>
      </Logo>
      <Contents>
        <Content
          variants={hoverTargetBar}
          animate="animate"
          whileHover={"hover"}
          onClick={onServiceClick}
        >
          <Ment variants={hoverOverVar}>
            INFO
            {isnow === 1 && <UnderBar variants={underVar} initial="initial" animate="animate" />}
          </Ment>
          <Hidden variants={hoverUnderVar}>
            INFO
            {isnow === 1 && <UnderBar variants={underVar} initial="initial" animate="animate" />}
          </Hidden>
        </Content>
        <Content
          variants={hoverTargetBar}
          animate="animate"
          whileHover={"hover"}
          onClick={onPortfolioClick}
        >
          <Ment variants={hoverOverVar}>
            PORTFOLIO
            {isnow === 2 && <UnderBar variants={underVar} initial="initial" animate="animate" />}
          </Ment>
          <Hidden variants={hoverUnderVar}>
            PORTFOLIO
            {isnow === 2 && <UnderBar variants={underVar} initial="initial" animate="animate" />}
          </Hidden>
        </Content>
        <Content
          variants={hoverTargetBar}
          animate="animate"
          whileHover={"hover"}
          onClick={onBlogClick}
        >
          <Ment variants={hoverOverVar}>
            BLOG
            {isnow === 3 && <UnderBar variants={underVar} initial="initial" animate="animate" />}
          </Ment>
          <Hidden variants={hoverUnderVar}>
            BLOG
            {isnow === 3 && <UnderBar variants={underVar} initial="initial" animate="animate" />}
          </Hidden>
        </Content>
        <Content
          variants={hoverTargetBar}
          animate="animate"
          whileHover={"hover"}
          onClick={onContactClick}
        >
          <Ment variants={hoverOverVar}>
            CONTACT
            {isnow === 4 && <UnderBar variants={underVar} initial="initial" animate="animate" />}
          </Ment>
          <Hidden variants={hoverUnderVar}>
            CONTACT
            {isnow === 4 && <UnderBar variants={underVar} initial="initial" animate="animate" />}
          </Hidden>
        </Content>
      </Contents>
      <AnimatePresence>
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
                  <ToggleList
                    key={"kor1"}
                    variants={toggleVar}
                    initial="initial"
                    animate="animate"
                    exit={"exit"}
                    istop={scrollY === 0}
                  >
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
                  <ToggleList
                    key={"kor2"}
                    variants={toggleVar}
                    initial="initial"
                    animate="animate"
                    exit={"exit"}
                    istop={scrollY === 0}
                  >
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
                  <ToggleList
                    key={"eng1"}
                    variants={toggleVar}
                    initial="initial"
                    animate="animate"
                    exit={"exit"}
                    istop={scrollY === 0}
                  >
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
                  <ToggleList
                    key={"eng2"}
                    variants={toggleVar}
                    initial="initial"
                    animate="animate"
                    exit={"exit"}
                    istop={scrollY === 0}
                  >
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
      </AnimatePresence>
    </Wrapper>
  );
};

export default NavigationBar;

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

const ToggleList = styled(motion.div)<{ istop: boolean }>`
  position: absolute;
  top: ${(props) => (props.istop ? "70px" : "60px")};
  right: 0px;
  top: 25px;
  width: 240px;
`;

const LangBar = styled.h2`
  font-size: 16px;
  line-height: 2;
  background-color: #262626;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  width: 100%;
  &:hover {
    background-color: #4d4d4d;
  }
  transition: background-color 0.2s ease-in-out;
`;

const LangChoicedBar = styled.h2`
  font-size: 16px;
  line-height: 2;
  background-color: #262626;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  width: 100%;
  &:hover {
    background-color: #4d4d4d;
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

interface INavProps {
  onMainClick: React.MouseEventHandler<HTMLButtonElement>;
  onPortfolioClick: React.MouseEventHandler<HTMLButtonElement>;
  onExperienceClick: React.MouseEventHandler<HTMLButtonElement>;
  onBlogClick: React.MouseEventHandler<HTMLButtonElement>;
  onContactClick: React.MouseEventHandler<HTMLButtonElement>;
  onServiceClick: React.MouseEventHandler<HTMLButtonElement>;
  serviceRef: React.RefObject<HTMLDivElement>;
  mainRef: React.RefObject<HTMLDivElement>;
  portFolioRef: React.RefObject<HTMLDivElement>;
  blogRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const hoverUnderVar = {
  animate: { opacity: 1, y: -0, transition: { duration: 0.3, ease: "easeInOut" } },
  hover: { opacity: 1, y: 30, transition: { duration: 0.3, ease: "easeInOut" } },
};

const hoverOverVar = {
  animate: { opacity: 1, y: -30, transition: { duration: 0.3, ease: "easeInOut" } },
  hover: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const hoverTargetBar = {
  animate: {},
  hover: {},
};

const underVar = {
  initial: { width: 0 },
  animate: { width: "100%" },
};

const toggleVar = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
