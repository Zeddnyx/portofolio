import { IconType } from "react-icons";

export interface List {
  href?: string;
  title: string;
}

export interface Social {
  icon: IconType | string;
  link: string;
  title: string;
  email?: string;
}

export interface Experience {
  title: string;
  title_full: string;
  date: string;
  story: string;
}
