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

export interface Experience {
  id: number;
  title: string;
  date: string;
  story: string;
}
