import MainContent from "@/components/MainContent";
import NavigationBar from "@/components/NavigationBar";
import Seo from "@/components/Seo";
import Services from "@/components/Service";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRecoilState } from "recoil";
import { IBlogState, IProjectDate, blogState, projectState, screenState } from "../atoms";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PortfolioSpot from "@/components/PortfolioSpot";
import { GetServerSideProps } from "next";
import { firestore } from "../firebase/firebaseAdmin";
import BlogSpot from "@/components/BlogSpot";

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

const Home = ({ data }: { data: { projects: IProjectDate[]; blogs: IBlogState[] }[] }) => {
  const mobileMatch = useMediaQuery("(max-width:745px)");
  const midMatch = useMediaQuery("(max-width:1200px)");
  const [screen, setScreen] = useRecoilState(screenState);

  useEffect(() => {
    if (!mobileMatch && !midMatch) setScreen(2);
    else if (!mobileMatch && midMatch) setScreen(1);
    else if (mobileMatch) setScreen(0);
  }, [mobileMatch, midMatch]);

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
      <PortfolioSpot key={"projects"} ref={portfolioRef} />
      <Projects projects={data[0].projects} />
      <BlogSpot key={"blog"} ref={blogRef} />
      <Blog blogs={data[0].blogs} />
      <Contact key={"contact"} ref={contactRef} />
      <Footer />
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
