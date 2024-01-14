import styled, { keyframes, css } from "styled-components";
import { RefObject, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useRecoilState } from "recoil";
import { languageState, IProjectData } from "../atoms";

import ArrowSmall from "./assets/arrowsmall.svg";
import Link from "next/link";
import Image from "next/image";

const Projects = ({ projects }: { projects: IProjectData[] }) => {
  const [isHover, setIsHover] = useState(-1);
  const [scrollY, setScrollY] = useState(0);
  const [sorted, setSorted] = useState<IProjectData[]>([]);
  const [isEng, setIsEng] = useRecoilState(languageState);
  const [isTitleIn, setIsTitleIn] = useState(false);
  const [isProjectOneIn, setIsProjectOneIn] = useState(false);
  const [isProjectTwoIn, setIsProjectTwoIn] = useState(false);
  const [isProjectThreeIn, setIsProjectThreeIn] = useState(false);
  const [isProjectFourIn, setIsProjectFourIn] = useState(false);

  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const projectRefOne = useRef<HTMLDivElement>(null);
  const projectRefTwo = useRef<HTMLDivElement>(null);
  const projectRefThree = useRef<HTMLDivElement>(null);
  const projectRefFour = useRef<HTMLDivElement>(null);

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
    const temp = [...projects];
    temp.sort((a, b) => a.index - b.index);
    setSorted(temp);
  }, [projects]);

  useEffect(() => {
    controls.start({ y: -10 + scrollY / 40 });
  }, [scrollY, controls]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTitleIn(true);
          } else {
          }
        });
      },
      { threshold: 0.1 }
    );

    const observerOne = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsProjectOneIn(true);
          } else {
          }
        });
      },
      { threshold: 0.1 }
    );

    const observerTwo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsProjectTwoIn(true);
          } else {
          }
        });
      },
      { threshold: 0.1 }
    );

    const observerThree = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsProjectThreeIn(true);
          } else {
          }
        });
      },
      { threshold: 0.1 }
    );

    const observerFour = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsProjectFourIn(true);
          } else {
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    if (projectRefOne.current) {
      observerOne.observe(projectRefOne.current);
    }

    if (projectRefTwo.current) {
      observerTwo.observe(projectRefTwo.current);
    }

    if (projectRefThree.current) {
      observerThree.observe(projectRefThree.current);
    }

    if (projectRefFour.current) {
      observerFour.observe(projectRefFour.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      if (projectRefOne.current) {
        observerOne.unobserve(projectRefOne.current);
      }
      if (projectRefTwo.current) {
        observerTwo.unobserve(projectRefTwo.current);
      }
      if (projectRefThree.current) {
        observerThree.unobserve(projectRefThree.current);
      }
      if (projectRefFour.current) {
        observerFour.unobserve(projectRefFour.current);
      }
    };
  }, [isTitleIn]);

  return (
    <Wrapper>
      <Container>
        <Header>
          <Subject>PORTFOLIO</Subject>
          <ViewLink
            variants={hoverTargetBar}
            animate="animate"
            whileHover={"hover"}
            target="_blank"
            href="https://github.com/WoodyLovesBoota"
          >
            <Ment variants={hoverOverVar}>
              VISIT GITHUB
              <ArrowSmall />
            </Ment>
            <Hidden variants={hoverUnderVar}>
              VISIT GITHUB
              <ArrowSmall />
            </Hidden>
          </ViewLink>
        </Header>
        <TitleWrapper ref={ref} isvisible={isTitleIn ? "true" : "false"}>
          <Title>SELECTED</Title>
          <SecondTitle>PROJECTS</SecondTitle>
        </TitleWrapper>
        <Main>
          {sorted &&
            sorted.slice(0, 4).map((project, index) =>
              index % 2 === 1 ? (
                <RowR animate={controls} key={project.index + "R"}>
                  <ProjectBoxR>
                    <Link
                      href={{
                        pathname: `/project/${project.name}/${project.index}`,
                        query: {
                          title: project.name,
                          index: project.index,
                        },
                      }}
                      scroll={false}
                    >
                      <ProjectTitleL>
                        <MentionR
                          onMouseOver={() => {
                            setIsHover(index);
                          }}
                          onMouseLeave={() => {
                            setIsHover(-1);
                          }}
                        >
                          <NameBox ref={index === 1 ? projectRefTwo : projectRefFour}>
                            {project.name.split("").map((char, ind) => {
                              return (
                                <NameSpanL
                                  isvisible={
                                    index === 1
                                      ? isProjectTwoIn.toString()
                                      : isProjectFourIn.toString()
                                  }
                                  index={ind}
                                  key={ind}
                                >
                                  {char}
                                </NameSpanL>
                              );
                            })}
                          </NameBox>
                          <ProjectDetail>
                            {isEng ? project.subtitle : project.subtitleKor}
                          </ProjectDetail>
                        </MentionR>
                      </ProjectTitleL>
                    </Link>
                  </ProjectBoxR>
                  <ProjectPhotoFrame>
                    <Link
                      href={{
                        pathname: `/project/${project.name}/${project.index}`,
                        query: {
                          title: project.name,
                          index: project.index,
                        },
                      }}
                      scroll={false}
                    >
                      <ProjectPhoto
                        variants={normalVar}
                        animate="animate"
                        whileHover={"hover"}
                        onMouseOver={() => {
                          setIsHover(index);
                        }}
                        onMouseLeave={() => {
                          setIsHover(-1);
                        }}
                      >
                        <Image
                          src={project.image[0]}
                          alt="Description"
                          width={700}
                          height={500}
                          style={{ width: "100%", height: "100%", borderRadius: "4px" }}
                        />
                      </ProjectPhoto>
                    </Link>
                  </ProjectPhotoFrame>
                </RowR>
              ) : (
                <Row animate={controls} key={project.index + "L"}>
                  <ProjectPhotoFrame>
                    <Link
                      href={{
                        pathname: `/project/${project.name}/${project.index}`,
                        query: {
                          title: project.name,
                          index: project.index,
                        },
                      }}
                      scroll={false}
                    >
                      <ProjectPhoto
                        variants={normalVar}
                        animate="animate"
                        whileHover={"hover"}
                        onMouseOver={() => {
                          setIsHover(index);
                        }}
                        onMouseLeave={() => {
                          setIsHover(-1);
                        }}
                      >
                        <Image
                          src={project.image[0]}
                          alt="Description"
                          width={700}
                          height={500}
                          style={{ width: "100%", height: "100%", borderRadius: "4px" }}
                        />
                      </ProjectPhoto>
                    </Link>
                  </ProjectPhotoFrame>
                  <ProjectBox>
                    <Link
                      href={{
                        pathname: `/project/${project.name}/${project.index}`,
                        query: {
                          title: project.name,
                          index: project.index,
                        },
                      }}
                      scroll={false}
                    >
                      <ProjectTitleR>
                        <Mention
                          onMouseOver={() => {
                            setIsHover(index);
                          }}
                          onMouseLeave={() => {
                            setIsHover(-1);
                          }}
                        >
                          <NameBox ref={index === 0 ? projectRefOne : projectRefThree}>
                            {project.name.split("").map((char, ind) => {
                              return (
                                <NameSpanR
                                  isvisible={
                                    index === 0
                                      ? isProjectOneIn.toString()
                                      : isProjectThreeIn.toString()
                                  }
                                  index={ind}
                                  key={ind}
                                >
                                  {char}
                                </NameSpanR>
                              );
                            })}
                          </NameBox>
                          <ProjectDetailR>
                            {isEng ? project.subtitle : project.subtitleKor}
                          </ProjectDetailR>
                        </Mention>
                      </ProjectTitleR>
                    </Link>
                  </ProjectBox>
                </Row>
              )
            )}
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 192px;
  perspective: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const Header = styled.div`
  padding: 18px 0;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Subject = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

const NameBox = styled.div`
  display: flex;
  @media (max-width: 745px) {
    justify-content: center;
  }
`;

const ViewLink = styled(motion.a)`
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

const SecondTitle = styled.h2`
  font-family: ClashGrotesk-Medium;
  font-size: 150px;
  text-align: center;
  line-height: 0.9;
  margin-bottom: 100px;

  @media (max-width: 1500px) {
    font-size: 10.42vw;
  }

  @media (max-width: 1080px) {
    margin-bottom: 80px;
  }
  @media (max-width: 745px) {
    margin-bottom: 40px;
    font-size: 60px;
  }
`;

const Container = styled.div`
  width: 1440px;
  @media (max-width: 1500px) {
    width: 100%;
    padding: 0 30px;
  }
  @media (max-width: 745px) {
    padding: 0 20px;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: rotateX(60deg) rotateY(10deg) rotateZ(-10deg);
    transform-origin: top;
    animation-timing-function: var(--ease-out-short);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const TitleWrapper = styled.div<{ isvisible: string }>`
  ${(props) =>
    props.isvisible === "true" &&
    css`
      animation: ${fadeIn} 1s ease-in-out forwards;
    `};
  opacity: 0;
`;

const Title = styled.h2`
  margin-top: 100px;
  font-family: ClashGrotesk-Medium;
  font-size: 150px;
  line-height: 0.9;
  @media (max-width: 1500px) {
    font-size: 10.42vw;
  }

  @media (max-width: 1080px) {
    margin-top: 80px;
  }
  @media (max-width: 745px) {
    margin-top: 40px;
    font-size: 60px;
  }
`;

const Main = styled.div``;

const Row = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 540px;
  margin-bottom: 100px;
  align-items: flex-end;
  @media (max-width: 1500px) {
    height: 37vw;
  }

  @media (max-width: 745px) {
    flex-direction: column;
    align-items: center;
    height: inherit;
    margin-bottom: 40px;
  }
`;

const RowR = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 540px;
  margin-bottom: 100px;
  align-items: flex-end;
  @media (max-width: 1500px) {
    height: 37vw;
  }
  @media (max-width: 745px) {
    flex-direction: column-reverse;
    align-items: center;
    height: inherit;
    margin-bottom: 40px;
  }
`;

const ProjectBoxR = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  padding: 0 30px;
  @media (max-width: 745px) {
    padding: 0;
    width: 100%;
    justify-content: center;
  }
`;
const ProjectBox = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  padding: 0 30px;
  @media (max-width: 745px) {
    padding: 0;
    width: 100%;
    justify-content: center;
  }
`;

const ProjectTitleL = styled(motion.h2)`
  display: flex;
  align-items: flex-end;
  text-align: right;
  @media (max-width: 745px) {
    text-align: center;
  }
`;

const ProjectTitleR = styled(motion.h2)`
  display: flex;
  align-items: flex-end;
  text-align: left;
  @media (max-width: 745px) {
    text-align: center;
  }
`;

const blink = keyframes`
  0% {
    transform: translateY(10px);
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

const NameSpanL = styled.span<{ isvisible: string; index: number }>`
  z-index: 2;
  visibility: hidden;
  ${(props) =>
    props.isvisible === "true" &&
    css`
      animation: ${blink} 0.5s ease-in-out forwards;
    `};
  animation-delay: ${(props) => props.isvisible === "true" && props.index * 0.03}s;
  font-family: ClashGrotesk-Regular;
  font-size: 60px;
  text-transform: uppercase;
  text-align: right;
  line-height: 1;
  @media (max-width: 1500px) {
    font-size: 48px;
  }
  @media (max-width: 1080px) {
    font-size: 4.17vw;
  }
  @media (max-width: 745px) {
    text-align: center;
    font-size: 32px;
  }
`;

const NameSpanR = styled.span<{ isvisible: string; index: number }>`
  z-index: 2;
  visibility: hidden;
  ${(props) =>
    props.isvisible === "true" &&
    css`
      animation: ${blink} 0.5s ease-in-out forwards;
    `};
  animation-delay: ${(props) => props.isvisible === "true" && props.index * 0.03}s;
  z-index: 2;
  font-family: ClashGrotesk-Regular;
  font-size: 60px;
  text-transform: uppercase;
  text-align: left;
  line-height: 1;
  @media (max-width: 1500px) {
    font-size: 48px;
  }
  @media (max-width: 1080px) {
    font-size: 4.17vw;
  }
  @media (max-width: 745px) {
    text-align: center;
    font-size: 32px;
  }
`;

const ProjectDetailR = styled.span`
  z-index: 2;
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  text-align: left;
  @media (max-width: 745px) {
    text-align: center;
  }
  @media (max-width: 1080px) {
    margin-top: 10px;
  }
`;

const ProjectDetail = styled.span`
  z-index: 2;
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  text-align: right;
  @media (max-width: 745px) {
    text-align: center;
  }
  @media (max-width: 1080px) {
    margin-top: 10px;
  }
`;

const MentionR = styled(motion.div)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  justify-content: flex-end;
  text-align: left;
  text-transform: uppercase;
  @media (max-width: 745px) {
    text-align: center;
    justify-content: center;
  }
`;

const Mention = styled(motion.div)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  justify-content: flex-end;
  text-transform: uppercase;
  text-align: right;
  @media (max-width: 745px) {
    text-align: center;
    justify-content: center;
  }
`;

const ProjectPhotoFrame = styled(motion.div)`
  background-size: cover;
  width: 67%;
  height: 100%;
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
  overflow: hidden;
  @media (max-width: 1500px) {
    height: 37vw;
  }
  @media (max-width: 745px) {
    height: 56.25vw;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ProjectPhoto = styled(motion.div)`
  width: 100%;
  height: 100%;
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
`;

const Ment = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
  position: absolute;
  line-height: 1;
`;

const Hidden = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
`;

const normalVar = {
  animate: { scale: 1.03, transition: { duration: 0.3, ease: "easeOut" } },
  hover: { scale: 1.0, transition: { duration: 0.3, ease: "easeOut" } },
};

const hoverUnderVar = {
  animate: { opacity: 1, y: -0, transition: { duration: 0.25, ease: "easeInOut" } },
  hover: { opacity: 1, y: 20, transition: { duration: 0.25, ease: "easeInOut" } },
};

const hoverOverVar = {
  animate: { opacity: 1, y: -20, transition: { duration: 0.25, ease: "easeInOut" } },
  hover: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeInOut" } },
};

const hoverTargetBar = {
  animate: {},
  hover: {},
};
