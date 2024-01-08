import { atom } from "recoil";

export const languageState = atom<boolean>({
  key: "isEng",
  default: false,
});

export const projectState = atom<IProjectDate[]>({
  key: "projectState",
  default: [
    {
      name: "",
      skill: "",
      image: [""],
      demo: "",
      github: "",
      detail: "",
      detailKor: "",
      subtitle: "",
      date: [""],
      subtitleKor: "",
      functions: "",
      functionsEng: "",
      index: 0,
    },
  ],
});

export const blogState = atom<IBlogState[]>({
  key: "blogState",
  default: [
    {
      title: "",
      date: "",
      link: "",
      image: "",
      titleEng: "",
    },
  ],
});

export const screenState = atom<number>({
  key: "screenWidth",
  default: 0,
});

export interface IProjectDate {
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
}

export interface IBlogState {
  title: string;
  date: string;
  link: string;
  image: string;
  titleEng: string;
}
