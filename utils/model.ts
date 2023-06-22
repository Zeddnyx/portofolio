import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface List {
  title: string;
  link: string;
}

export interface Social {
  icon: IconType | string;
  link: string;
  title: string;
  email?: string;
}

export interface Project<T> {
  id?: number;
  title: T;
  desc: T;
  tech: T;
  link: T;
  live?: T;
  image?: StaticImageData;
}

export interface Experience {
  id: number;
  title: string;
  date: string;
  story: string;
}
