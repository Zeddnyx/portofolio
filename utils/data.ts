import { FiGithub } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import Ztools from "@/public/ztools.png";
import Movie from "@/public/movie.png";
import KeepClone from "@/public/keep-clone.png";
import { Experience, List, Social } from "./types";

export const list: List[] = [
  {
    link: "about",
  },
  {
    link: "experience",
  },
  {
    link: "work",
  },
  {
    link: "contact",
  },
];
export const experience: Experience[] = [
  {
    title: "Gebra",
    title_full: "Gebra Kreativa Global",
    date: "Sep 2023",
    story:
      "Currently working as a frontend developer at Gebra Kreativa, where I am responsible for developing and maintaining the project company and client website.",
  },
  {
    title: "Deborahtech",
    title_full: "Deborahtech",
    date: "July 2023",
    story:
      "I have experience working as a freelance web developer at Deborahtech, where I helped clients turn their designs from Figma into fully functional websites. This experience has taught me the importance of attention to detail and the ability to work closely with clients to ensure their vision is realized.",
  },
  {
    title: "Electrindo",
    title_full: "Electrindo Inti Dinamika",
    date: "May 2023",
    story:
      "Im working with other team engineer, develop, maintained and styled interactive web dashboard, mainly focused build dashboard chart for monitoring machine",
  },
  {
    title: "TemanTrip",
    title_full: "TemanTrip",
    date: "February 2023",
    // certif: TemanTrip,
    story:
      "I am working as an intern at a startup, where I have been involved in various projects ranging from building responsive web pages to developing new features for existing applications. This experience has allowed me to working with modern web technologies and has honed my skills in problem-solving and collaboration.",
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
    icon: AiOutlineWhatsApp,
    link: "https://wa.me/6285776364053",
    title: "WhatsApp",
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

export const project = [
  {
    title: "Google Keep Clone",
    desc: "This project is a clone of the Google Keep app, The user interface of MyProject is designed to be clean, minimalistic, and user-friendly, ensuring a seamless and enjoyable user experience. It is responsive and adapts to different screen sizes, allowing users to access and manage their notes from various devices, including desktops, tablets, and mobile phones.",
    tech: ["React", "Zustand", "TypeScript", "Vercel", "Tailwind"],
    link: "https://github.com/Zeddnyx/Google-Keep-Clone",
    live: "https://zkeep-clone.vercel.app/",
    image: KeepClone,
  },
  {
    title: "Movie App",
    desc: "A movie app built with ReactJS, and Tanstack's powerful fetching capabilities. With this app, you'll be able to search for movies by title, see detail for movie. Plus, with the sleek and intuitive user interface, you'll have all the information you need at your fingertips. Whether you're a casual moviegoer or a hardcore cinephile, this app is the perfect tool for discovering new films and staying up-to-date on the latest releases.",
    tech: ["React", "Vite", "Tailwind", "Tanstack", "Vercel"],
    link: "https://github.com/Zeddnyx/MovieApp",
    image: Movie,
    live: "https://zedd-movie.vercel.app",
  },
  {
    title: "Ztools",
    desc: "Ztools is a simplistic yet highly functional web app that I have created to provide a variety of useful tools. The app is designed to be user-friendly and intuitive, and I am constantly updating it with new features and improvements to make it even more helpful. I am proud of this project because it showcases my ability to create practical solutions that are both aesthetically pleasing and highly functional.",
    tech: ["NextJs", "Tailwind", "Tanstack", "Vercel"],
    link: "https://github.com/Zeddnyx/Ztools",
    image: Ztools,
    live: "https://ztools.vercel.app",
  },
];

export const otherProject = [
  {
    id: 0,
    title: "Tracking Dashboard",
    desc: "I created as part of challanges on FrontendMentor. This challanged me to create a responsive design that works seamlessly across both desktop and mobile devices.",
    tech: ["React", "Tailwind", "Netlify"],
    link: "https://github.com/Zeddnyx/timeTrackingDashboard",
    live: "https://time-tracking-dashboard.netlify.app",
  },
  {
    id: 1,
    title: "Dashboard App",
    desc: "A dashboard app built with React and Tailwind CSS. This fully responsive app uses context to manage state, authentication. With a sleek and intuitive user interface.",
    tech: ["React", "Tailwind", "Context", "Vercel"],
    link: "https://github.com/Zeddnyx/Dashboard",
    live: "https://dashboard-zeddnyx.vercel.app",
  },
  {
    id: 2,
    title: "News App",
    desc: "News App is challanges from FrontendMentor, and this challanges is to make a grid system with responsive design, and get the data using API from NYTIMES",
    tech: ["React", "Tailwind", "Netlify"],
    link: "https://github.com/Zeddnyx/News",
    live: "https://zedd-news.netlify.app/",
  },
  {
    id: 3,
    title: "Url Shortly",
    desc: "A URL shortener built with React and API. With this app, you can quickly and easily shorten any URL to make it more manageable and shareable.",
    tech: ["React", "Tailwind", "Netlify"],
    link: "https://github.com/Zeddnyx/urlShortly",
    live: "https://zedd-url-shortly.netlify.app/",
  },
];
