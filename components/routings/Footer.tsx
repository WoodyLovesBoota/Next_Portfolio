import styled from "styled-components";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Wrapper>
      <FooterMainRow>
        <FirstContent>@ YANGTAEWOOK 2024.</FirstContent>
        <Center>
          <RestContent
            variants={hoverTargetBar}
            animate="animate"
            whileHover={"hover"}
            href="https://github.com/WoodyLovesBoota/TravelGo"
            target="_blank"
          >
            <Show variants={hoverOverVar}>GITHUB</Show>
            <Hidden variants={hiddenVar}>GITHUB</Hidden>
          </RestContent>
          <RestContent
            variants={hoverTargetBar}
            animate="animate"
            whileHover={"hover"}
            target="_blank"
            href="https://velog.io/@woodylovescoding"
          >
            <Show variants={hoverOverVar}>BLOG</Show>
            <Hidden variants={hiddenVar}>BLOG</Hidden>
          </RestContent>
          <RestContent
            variants={hoverTargetBar}
            animate="animate"
            whileHover={"hover"}
            target="_blank"
            href="https://www.linkedin.com/in/tae-wook-yang-6762092a2/"
          >
            <Show variants={hoverOverVar}>LINKEDIN</Show>
            <Hidden variants={hiddenVar}>LINKEDIN</Hidden>
          </RestContent>
        </Center>
        <Button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          variants={hoverTargetBar}
          animate="animate"
          whileHover={"hover"}
        >
          <Ment variants={hoverTargetBar}>
            BACK TO TOP
            <UnderBar variants={hoverUnderVar} />
          </Ment>

          <Circle variants={hoverVar}>
            <motion.svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="transparent"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" y="0.5" width="30" height="30" rx="15" stroke="#000000" />
              <g clipPath="url(#clip0_36_118)">
                <motion.path
                  variants={svgVar}
                  d="M7.5 8C7.5 5.46386 9.33911 3.5 11.5 3.5C13.6609 3.5 15.5 5.46386 15.5 8C15.5 10.5361 13.6609 12.5 11.5 12.5C9.33911 12.5 7.5 10.5361 7.5 8Z"
                  stroke="#ffffff"
                />
                <motion.path
                  variants={svgVar}
                  d="M15.5 8C15.5 5.46386 17.3391 3.5 19.5 3.5C21.6609 3.5 23.5 5.46386 23.5 8C23.5 10.5361 21.6609 12.5 19.5 12.5C17.3391 12.5 15.5 10.5361 15.5 8Z"
                  stroke="#ffffff"
                />
                <motion.line
                  x1="15.5"
                  y1="23"
                  x2="15.5"
                  y2="8"
                  stroke="#ffffff"
                  variants={svgVar}
                />
              </g>
              <defs>
                <clipPath id="clip0_36_118">
                  <rect
                    width="9"
                    height="15"
                    fill="transparent"
                    transform="translate(20 23) rotate(-180)"
                  />
                </clipPath>
              </defs>
            </motion.svg>
          </Circle>
        </Button>
      </FooterMainRow>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 150px 0;
  @media (max-width: 745px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const Center = styled.div`
  display: flex;
  margin: 0 auto;
  overflow: hidden;
  align-items: center;
  position: relative;
  cursor: pointer;
  background-color: black;
  @media (max-width: 745px) {
    flex-direction: column;
    justify-content: center;
    margin: 50px 0;
  }
`;

const FirstContent = styled.h1`
  font-size: 16px;
  font-weight: 400;
  color: white;
  margin-right: auto;
  @media (max-width: 745px) {
    margin-right: inherit;
  }
`;

const RestContent = styled(motion.a)`
  margin: 0 20px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  position: relative;
  color: white;
  overflow: hidden;
  @media (max-width: 745px) {
    margin: 10px 0;
  }
`;

const FooterMainRow = styled.div`
  display: flex;
  justify-content: center;
  width: 1440px;
  overflow: hidden;
  @media (max-width: 1500px) {
    width: 100%;
    padding: 0 30px;
  }
  @media (max-width: 745px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const Button = styled(motion.button)`
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  @media (max-width: 745px) {
    margin-left: inherit;
  }
`;

const Circle = styled(motion.div)`
  border-radius: 100px;
  border: 1px solid white;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const UnderBar = styled(motion.div)`
  background-color: white;
  width: 100%;
  height: 1px;
`;

const Ment = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
  color: white;
`;

const Hidden = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
  color: white;
  line-height: 1;
`;

const Show = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  line-height: 1;
`;

const hoverVar = {
  animate: { backgroundColor: "#000000", fill: "#ffffff" },
  hover: {
    backgroundColor: "#ffffff",
    fill: "#000000",
    transition: { delay: 0.15, type: "spring" },
  },
};

const svgVar = {
  animate: { stroke: "#ffffff" },
  hover: { stroke: "#000000", transition: { delay: 0.2, type: "spring" } },
};

const hoverTargetBar = {
  animate: {},
  hover: {},
};

const hoverUnderVar = {
  animate: { width: 0 },
  hover: { width: "100%", transition: { delay: 0.1 } },
};

const hiddenVar = {
  animate: { opacity: 1, y: -0, transition: { duration: 0.3 } },
  hover: { opacity: 1, y: 20, transition: { duration: 0.3 } },
};

const hoverOverVar = {
  animate: { opacity: 1, y: -20, transition: { duration: 0.3 } },
  hover: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};
