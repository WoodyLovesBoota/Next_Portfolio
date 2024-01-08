import MainContent from "@/components/MainContent";
import NavigationBar from "@/components/NavigationBar";
import Seo from "@/components/Seo";
import Services from "@/components/Service";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRecoilState } from "recoil";
import { blogState, projectState, screenState } from "../atoms";
import { firebaseDB } from "../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Projects from "@/components/Projects";

const Home = () => {
  const mobileMatch = useMediaQuery("(max-width:745px)");
  const midMatch = useMediaQuery("(max-width:1200px)");
  const [screen, setScreen] = useRecoilState(screenState);
  const [projectData, setProjectData] = useRecoilState(projectState);
  const [blogData, setBlogDate] = useRecoilState(blogState);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mobileMatch && !midMatch) setScreen(2);
    else if (!mobileMatch && midMatch) setScreen(1);
    else if (mobileMatch) setScreen(0);
  }, [mobileMatch, midMatch]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firebaseDB, "portfolio"), (snapshot) => {
      const postsArr = snapshot.docs.map((eachDoc) => {
        return Object.assign(eachDoc.data(), { id: eachDoc.id });
      });
      setProjectData(postsArr && postsArr[0] && postsArr[0]["projects"]);
      setBlogDate(postsArr && postsArr[0] && postsArr[0]["blogs"]);
      setIsLoading(false);
    });
    console.log("a");
    return () => unsubscribe();
  }, []);

  const router = useRouter();
  const mainRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

  const onMainClick = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onServiceClick = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const onPortfolioClick = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onExperienceClick = () => {
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onBlogClick = () => {
    blogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Wrapper>
      {!isLoading && (
        <>
          <Seo title="Portfolio" />
          <NavigationBar
            onContactClick={onContactClick}
            onBlogClick={onBlogClick}
            onExperienceClick={onExperienceClick}
            onPortfolioClick={onPortfolioClick}
            onMainClick={onMainClick}
            onServiceClick={onServiceClick}
            serviceRef={serviceRef}
            mainRef={mainRef}
            portFolioRef={portfolioRef}
            blogRef={blogRef}
            contactRef={contactRef}
          />
          <MainContent key={"main"} ref={mainRef} />
          <Services key={"service"} ref={serviceRef} />
          <Projects key={"projects"} ref={portfolioRef} />
        </>
      )}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100vw;
  background-color: white;
`;

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
