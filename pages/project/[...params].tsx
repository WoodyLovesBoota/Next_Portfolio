import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";

import ArrowSmall from "../../components/assets/arrowsmall.svg";
import Arrow from "../../components/assets/arrowbig.svg";
import AngleR from "../../components/assets/anglearrowright.svg";
import AngleL from "../../components/assets/anglearrowleft.svg";

import Seo from "@/components/Seo";
import PortfolioNavigationBar from "@/components/PortfolioNavigationBar";
import Footer from "@/components/Footer";

import { GetServerSideProps } from "next";

import { languageState, IProjectData, IBlogData } from "../../atoms";
import { months } from "../../utils";
import Link from "next/link";

import { firestore } from "../../firebase/firebaseAdmin";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const snapshot = await firestore.collection("portfolio").get();
  const data = snapshot.docs.map((doc) => {
    return Object.assign(doc.data(), { id: doc.id });
  });

  return {
    props: {
      data,
    },
  };
};

const Detail = ({ data }: { data: { projects: IProjectData[]; blogs: IBlogData[] }[] }) => {
  const router = useRouter();
  const [title, ind] = router.query.params || [];
  const [isRight, setIsRight] = useState(1);
  const [index, setIndex] = useState(0);
  const [sorted, setSorted] = useState<IProjectData[]>([]);
  const isEng = useRecoilValue(languageState);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const temp = [...data[0].projects];
    temp.sort((a, b) => a.index - b.index);
    setSorted(temp.slice(0, 4));
  }, [data]);

  const increaseIndex = () => {
    if (leaving) return;
    toggleLeaving();
    setIsRight(1);
    sorted &&
      setIndex((prev) => (prev === sorted[Number(ind) - 1].image.length - 1 ? 0 : prev + 1));
  };

  const decreaseIndex = () => {
    if (leaving) return;
    toggleLeaving();
    setIsRight(-1);
    sorted &&
      setIndex((prev) => (prev === 0 ? sorted[Number(ind) - 1].image.length - 1 : prev - 1));
  };

  const toggleLeaving = () => {
    setLeaving((prev) => !prev);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIndex(0);
    setTimeout(() => {
      setLeaving(false);
    }, 1000);
  }, [title]);

  return (
    <Wrapper>
      <PortfolioNavigationBar />
      <Seo title={title} />
      <Container>
        <Header>
          <Link href={`/`} scroll={false}>
            <ViewLink variants={hoverTargetBar} animate="animate" whileHover={"hover"}>
              <Ment variants={hoverOverVar}>
                <PrevArrowWrapper>
                  <ArrowSmall />
                </PrevArrowWrapper>
                BACK TO PORTFOLIO
              </Ment>
              <Hidden variants={hoverUnderVar}>
                <PrevArrowWrapper>
                  <ArrowSmall />
                </PrevArrowWrapper>
                BACK TO PORTFOLIO
              </Hidden>
            </ViewLink>
          </Link>
          <Link href={sorted[Number(ind) - 1]?.github || "/"} target="_blank">
            <ViewLink variants={hoverTargetBar} animate="animate" whileHover={"hover"}>
              <Ment variants={hoverOverVar}>
                VISIT GITHUB
                <ArrowSmall />
              </Ment>
              <Hidden variants={hoverUnderVar}>
                VISIT GITHUB
                <ArrowSmall />
              </Hidden>
            </ViewLink>
          </Link>
        </Header>
        <TitleRow>
          <Title>{title}</Title>
          <Box>
            <SlideButtonL onClick={decreaseIndex}>
              <AngleL />
            </SlideButtonL>
            <AnimatePresence custom={isRight} onExitComplete={toggleLeaving}>
              {sorted[Number(ind) - 1]?.image.map((e, i) => (
                <Card
                  custom={isRight}
                  variants={index === i ? cardVar : noVar}
                  initial={"initial"}
                  animate={isRight ? "animate" : "animateWhenLeft"}
                  exit={"exit"}
                  key={index === i ? i + "boxImage" : i + "no"}
                  bgphoto={`url(${sorted[Number(ind) - 1]?.image[i]})`}
                >
                  <LinktoProject href={sorted[Number(ind) - 1]?.demo} target="_blank" />
                </Card>
              ))}
            </AnimatePresence>
            <SlideButton onClick={increaseIndex}>
              <AngleR />
            </SlideButton>
            <Dots num={sorted[Number(ind) - 1]?.image.length}>
              {sorted[Number(ind) - 1]?.image.map((e, i) =>
                i === index ? <NowDot key={i}></NowDot> : <Dot key={i}></Dot>
              )}
            </Dots>
          </Box>
        </TitleRow>
        <DescriptionRow>
          <Column>
            <RowTitle>Project Details</RowTitle>
            <Skills>
              <SkillTitle>Date:</SkillTitle>
              <SkillList>
                {sorted[Number(ind) - 1]?.date[0].slice(0, 4) +
                  "." +
                  sorted[Number(ind) - 1]?.date[0].slice(4) ===
                sorted[Number(ind) - 1]?.date[1].slice(0, 4) +
                  "." +
                  sorted[Number(ind) - 1]?.date[1].slice(4) ? (
                  <Skill>
                    {months[Number(sorted[Number(ind) - 1]?.date[0].slice(4)) - 1] +
                      ", " +
                      sorted[Number(ind) - 1]?.date[0].slice(0, 4)}
                  </Skill>
                ) : (
                  <>
                    <Skill>
                      {months[Number(sorted[Number(ind) - 1]?.date[0].slice(4)) - 1] +
                        ", " +
                        sorted[Number(ind) - 1]?.date[0].slice(0, 4)}
                    </Skill>
                    <Divider>-</Divider>
                    <Skill>
                      {months[Number(sorted[Number(ind) - 1]?.date[1].slice(4)) - 1] +
                        ", " +
                        sorted[Number(ind) - 1]?.date[1].slice(0, 4)}
                    </Skill>
                  </>
                )}
              </SkillList>
            </Skills>
            <Skills>
              <SkillTitle>Skills:</SkillTitle>
              <SkillList>
                <Skill>{sorted[Number(ind) - 1]?.skill}</Skill>
              </SkillList>
            </Skills>
            <Skills>
              <SkillTitle>Functions:</SkillTitle>
              <SkillList>
                <Func>
                  {isEng
                    ? sorted[Number(ind) - 1]?.functionsEng
                    : sorted[Number(ind) - 1]?.functions}
                </Func>
              </SkillList>
            </Skills>
          </Column>
          <Column>
            <RowTitle>Description</RowTitle>
            <Description>
              {isEng ? sorted[Number(ind) - 1]?.detail : sorted[Number(ind) - 1]?.detailKor}
            </Description>
          </Column>
        </DescriptionRow>
        <BigArrowWrapper>
          <Arrow />
        </BigArrowWrapper>
        <Button
          variants={hoverVar}
          animate="animate"
          whileHover={"hover"}
          href={sorted[Number(ind) - 1]?.demo}
          target="_blank"
        >
          VISIT WEBSITE
          <UnderBar variants={hoverUnderBarVar} />
        </Button>
        <PageButtons>
          {Number(ind) - 1 !== 0 && (
            <PageButton variants={hoverTargetBar} animate="animate" whileHover={"hover"}>
              <Link
                href={{
                  pathname: `/project/${sorted[Number(ind) - 1 - 1]?.name}/${
                    sorted[Number(ind) - 1 - 1]?.index
                  }`,
                  query: {
                    title: sorted[Number(ind) - 1 - 1]?.name,
                    index: sorted[Number(ind) - 1 - 1]?.index,
                  },
                }}
                scroll={false}
              >
                <ButtonMent variants={hoverOverVar}>
                  <PrevArrowWrapper>
                    <ArrowSmall />
                  </PrevArrowWrapper>
                  Prev
                </ButtonMent>
                <ButtonHidden variants={hoverUnderVar}>
                  <PrevArrowWrapper>
                    <ArrowSmall />
                  </PrevArrowWrapper>
                  Prev
                </ButtonHidden>
              </Link>
            </PageButton>
          )}
          {Number(ind) - 1 !== sorted.length - 1 && (
            <NextButton variants={hoverTargetBar} animate="animate" whileHover={"hover"}>
              <Link
                href={{
                  pathname: `/project/${sorted[Number(ind) - 1 + 1]?.name}/${
                    sorted[Number(ind) - 1 + 1]?.index
                  }`,
                  query: {
                    title: sorted[Number(ind) - 1 + 1]?.name,
                    index: sorted[Number(ind) - 1 + 1]?.index,
                  },
                }}
                scroll={false}
              >
                <ButtonMent variants={hoverOverVar}>
                  Next
                  <ArrowWrapper>
                    <ArrowSmall />
                  </ArrowWrapper>
                </ButtonMent>
                <ButtonHidden variants={hoverUnderVar}>
                  Next
                  <ArrowWrapper>
                    <ArrowSmall />
                  </ArrowWrapper>
                </ButtonHidden>
              </Link>
            </NextButton>
          )}
        </PageButtons>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 162px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 745px) {
    padding-top: 102px;
  }
`;

const Container = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1500px) {
    width: 100%;
    padding: 0 30px;
  }
  @media (max-width: 745px) {
    padding: 0 20px;
  }
`;

const SlideButton = styled(motion.div)`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  right: 0;
  font-size: 36px;
  color: white;
  cursor: pointer;
  padding: 0 30px;
  @media (max-width: 745px) {
    padding: 0 20px;
  }
  @media (max-width: 580px) {
    padding: 0;
  }
`;

const SlideButtonL = styled(motion.div)`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  left: 0;
  font-size: 36px;
  color: white;
  cursor: pointer;
  z-index: 1;
  padding: 0 30px;
  @media (max-width: 745px) {
    padding: 0 20px;
  }
  @media (max-width: 580px) {
    padding: 0;
  }
`;

const LinktoProject = styled.a`
  width: 80%;
  height: 80%;
  cursor: pointer;
`;

const Divider = styled.h2`
  font-size: 16px;
  font-weight: 400;
  margin: 0 10px;
`;

const Box = styled.div`
  width: 100%;
  position: relative;
  height: 810px;
  overflow: hidden;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 1500px) {
    height: 56.25vw;
  }
`;

const Card = styled(motion.div)<{ bgphoto: string }>`
  width: 100%;
  height: 810px;
  background: ${(props) => props.bgphoto};
  background-position: center;
  background-size: cover;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.03);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1500px) {
    height: 56.25vw;
  }
`;

const Header = styled.div`
  width: 100%;
  padding: 18px 0;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ViewLink = styled(motion.div)`
  position: relative;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  overflow: hidden;

  & svg {
    margin-left: 11px;
  }
`;

const TitleRow = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  margin-top: 100px;
  font-family: ClashGrotesk-Medium;
  font-size: 150px;
  line-height: 0.9;
  text-transform: uppercase;
  margin-bottom: 100px;
  @media (max-width: 1500px) {
    font-size: 10.42vw;
  }

  @media (max-width: 1080px) {
    margin-top: 80px;
    margin-bottom: 80px;
  }
  @media (max-width: 745px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const DescriptionRow = styled.div`
  display: flex;
  margin-top: calc(100px);
  justify-content: space-between;
  margin-bottom: 150px;
  width: 100%;

  @media (max-width: 1500px) {
    margin-top: 80px;
  }

  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 50px;
  }

  @media (max-width: 745px) {
    margin-bottom: 40px;
    margin-top: 40px;
  }
`;

const Column = styled.div`
  width: 705px;
  @media (max-width: 1080px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const RowTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 18px;
`;

const SkillTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  width: 150px;
  line-height: 2;
`;

const SkillList = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 150px);
  @media (max-width: 580px) {
    width: calc(100%);
    flex-wrap: wrap;
  }
`;

const Skills = styled.div`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
  width: calc(100% - 30px);
  @media (max-width: 1080px) {
    width: 100%;
  }
  @media (max-width: 580px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Skill = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 2;
  flex-wrap: wrap;
  text-transform: uppercase;
`;

const Func = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 2;
  flex-wrap: wrap;
`;

const Description = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
`;

const shake = keyframes`
    0%, 100% {
    transform: translateY(-20px);
  }

  50% {
    transform: translateY(-40px);
  }
`;

const BigArrowWrapper = styled.div`
  animation: ${shake} 1s ease-in-out infinite;
`;

const Button = styled(motion.a)`
  margin-top: 50px;
  font-family: ClashGrotesk-Medium;
  font-size: 150px;
  line-height: 0.9;
  text-transform: uppercase;
  margin-bottom: 100px;
  text-align: center;
  @media (max-width: 1500px) {
    font-size: 10.42vw;
  }
  @media (max-width: 745px) {
    margin-top: 40px;
    font-size: 60px;
    margin-bottom: 80px;
  }
`;

const PageButtons = styled.div`
  width: 100vw;
  padding: 24px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  border-top: 1px solid #e6e6e6;
  @media (max-width: 745px) {
    padding: 17px 20px;
  }
`;

const PageButton = styled(motion.button)`
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const ArrowWrapper = styled.div`
  margin-left: 10px;
`;

const PrevArrowWrapper = styled.div`
  margin-right: 10px;
  rotate: 180deg;
`;

const NextButton = styled(motion.button)`
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  margin-left: auto;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const ButtonMent = styled(motion.h2)`
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  position: absolute;
  overflow: hidden;
`;

const ButtonHidden = styled(motion.h2)`
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Hidden = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

const UnderBar = styled(motion.div)`
  background-color: black;
  width: 100%;
  height: 5px;
  border-radius: 100px;
`;

const Dots = styled.div<{ num: number }>`
  display: flex;
  z-index: 100;
  position: absolute;
  left: calc(50% - 19px * number);
  bottom: 30px;
  @media (max-width: 745px) {
    bottom: 20px;
  }
  @media (max-width: 580px) {
    bottom: 10px;
  }
`;

const NowDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: white;
  margin: 0 7px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  border: 1px solid white;
  margin: 0 7px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
`;

const hoverVar = {
  hover: {
    color: "#000000",
  },
};

const Ment = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
  position: absolute;
  display: flex;
  align-items: center;
`;

const hoverUnderVar = {
  animate: { opacity: 1, y: -0, transition: { duration: 0.25 } },
  hover: { opacity: 0, y: 30, transition: { duration: 0.25 } },
};

const hoverOverVar = {
  animate: { opacity: 0, y: -30, transition: { duration: 0.25 } },
  hover: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

const hoverTargetBar = {
  animate: {},
  hover: {},
};

const hoverUnderBarVar = {
  animate: { width: 0 },
  hover: { width: "100%" },
};

const cardVar = {
  initial: (custom: number) => ({ x: custom === 1 ? "100%" : "-100%" }),
  animate: { x: 0, opacity: 1, transition: { type: "tween", duration: 0.7 } },
  exit: (custom: number) => ({
    x: custom === 1 ? "-100%" : "100%",
    transition: { type: "tween", duration: 0.7 },
  }),
};

const noVar = {
  initial: { x: 0, opacity: 0 },
  animate: {},
  exit: {},
};
