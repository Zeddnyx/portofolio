import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface List {
  link: string;
}

export interface Social {
  icon: IconType | string;
  link: string;
  title: string;
  email?: string;
}

export interface Project {
  id?: number;
  title:  string;
  desc: string;
  tech: string[];
  link: string;
  live?: string;
  image?: any;
}

export interface Experience {
  id: number;
  title: string;
  date: string;
  story: string;
}
