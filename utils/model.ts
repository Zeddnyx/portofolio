import { IconType } from "react-icons";

export interface List {
  title: string;
  link: string;
}

export interface Social {
  icon: IconType | string;
  link: string;
  title: string;
}

export interface Project<T> {
  id?: number;
  title: T;
  desc: T;
  tech: T;
  link: T;
  live?: T;
  image?: T;
}

export interface Experience {
  id: number;
  title: string;
  date: string;
  story: string;
}
