import { atom } from "recoil";

export const languageState = atom<boolean>({
  key: "isEng",
  default: false,
});

export const screenState = atom<number>({
  key: "screenWidth",
  default: 0,
});

export interface IProjectData {
  name: string;
  skill: string;
  image: string[];
  demo: string;
  github: string;
  detail: string;
  detailKor: string;
  subtitle: string;
  date: string[];
  subtitleKor: string;
  functions: string;
  functionsEng: string;
  index: number;
  content: { name: string; desc: string; img: string; nameEng: string; descEng: string }[];
  problem: { name: string; desc: string; img: string; nameEng: string; descEng: string }[];
}

export interface IBlogData {
  title: string;
  date: string;
  link: string;
  image: string;
  titleEng: string;
}
