import { FiGithub } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import Nvim from "../public/nvim.jpg";
import Time from "../public/time.jpg";
import Movie from "../public/movie.jpg";
import { Experience, List, Project, Social } from "./model";
import { StaticImageData } from "next/image";

export const list: List[] = [
  {
    title: "About",
    link: "about",
  },
  {
    title: "Experience",
    link: "experience",
  },
  {
    title: "Work",
    link: "work",
  },
  {
    title: "Contact",
    link: "contact",
  },
];
export const social: Social[] = [
  {
    icon: FiGithub,
    link: "https://github.com/Zeddnyx",
    title: "Github",
  },
  {
    icon: TbBrandTelegram,
    link: "https://t.me/Zeddnyx",
    title: "Telegram",
  },
  {
    icon: FiLinkedin,
    link: "https://www.linkedin.com/in/jaenudin-z-650482199",
    title: "Linkedin",
  },
  {
    icon: AiOutlineMail,
    email: "Zeddnyx08@gmail.com",
    link: "mailto:zeddnyx08@gmail.com",
    title: "Email",
  },
];

export const project: Project<string>[] = [
  {
    title: "Neovim Configuration",
    desc: "I have  optimized for fast startup times. I have added snippets similliar to those found in VSCode. this setup is perfect for frontend development and has streamlined my workflow by providing a comportable and efficient environment for coding",
    tech: "Lua, Json",
    link: "https://github.com/Zeddnyx/Znvim",
    image: Nvim,
  },
  {
    title: "Movie App",
    desc: "A movie app built with ReactJS, and Tanstack's powerful fetching capabilities. With this app, you'll be able to search for movies by title, see detail for movie. Plus, with the sleek and intuitive user interface, you'll have all the information you need at your fingertips. Whether you're a casual moviegoer or a hardcore cinephile, this app is the perfect tool for discovering new films and staying up-to-date on the latest releases.",
    tech: "React, Vite, Tailwind, API, Tanstack, Vercel",
    link: "https://github.com/Zeddnyx/parah-lu",
    live: "https://zedd-movie.vercel.app",
    image: Movie,
  },
  {
    title: "Tracking Dashboard",
    desc: "I created as part of challanges on FrontendMentor. This challanged me to create a responsive design that works seamlessly across both desktop and mobile devices. I was able to use my skills in grid layouts to create a visually appealing design that is both ease to use abd higly functional",
    tech: "React, Tailwind, Netlify",
    link: "https://github.com/Zeddnyx/timeTrackingDashboard",
    live: "https://zedd-dashboard-time.netlify.app",
    image: Time,
  },
];

export const otherProject: Project<string>[] = [
  {
    id: 0,
    title: "Ztools",
    desc: "Ztools is simplistic yet highly functional web app that I have created to provide a variety of useful tools.",
    tech: "React, API, Tailwind, Vercel",
    link: "https://github.com/Zeddnyx/Ztools",
    live: "https://ztools.vercel.app",
  },
  {
    id: 1,
    title: "Dashboard App",
    desc: "A dashboard app built with React and Tailwind CSS. This fully responsive app uses context to manage state, authentication. With a sleek and intuitive user interface.",
    tech: "React, API, Tailwind, Context, Vercel",
    link: "https://github.com/Zeddnyx/Dashboard",
    live: "https://dashboard-zeddnyx.vercel.app",
  },
  {
    id: 2,
    title: "News App",
    desc: "News App is challanges from FrontendMentor, and this challanges is to make a grid system with responsive design, and get the data using API from NYTIMES",
    tech: "React, API, Tailwind, Netlify",
    link: "https://github.com/Zeddnyx/News",
    live: "https://zedd-news.netlify.app/",
  },
  {
    id: 3,
    title: "Url Shortly",
    desc: "A URL shortener built with React and API. With this app, you can quickly and easily shorten any URL to make it more manageable and shareable.",
    tech: "React, API, Tailwind, Netlify",
    link: "https://github.com/Zeddnyx/urlShortly",
    live: "https://zedd-url-shortly.netlify.app/",
  },
];
export const experience: Experience[] = [
  {
    id: 0,
    title: "Electrindo",
    date: "May 2023",
    story:
      "Currently, Im working with other team engineer, develop, maintained and styled interactive web dashboard, mainly focused build dashboard chart for monitoring machine",
  },
  {
    id: 1,
    title: "TemanTrip",
    date: "February 2023",
    story:
      "I am working as an intern at a startup, where I have been involved in various projects ranging from building responsive web pages to developing new features for existing applications. This experience has allowed me to working with modern web technologies and has honed my skills in problem-solving and collaboration.",
  },
  {
    id: 2,
    title: "Freelance",
    date: "January 2023",
    story:
      "I have experience working as a freelance web developer, where I helped clients turn their designs from Figma into fully functional websites. This experience has taught me the importance of attention to detail and the ability to work closely with clients to ensure their vision is realized.",
  },
  {
    id: 3,
    title: "Freelance",
    date: "February 2023",
    story:
      "I have experience working as a freelance web developer, where I helped clients turn their designs from Figma into fully functional websites. This experience has taught me the importance of attention to detail and the ability to work closely with clients to ensure their vision is realized.",
  },
];
