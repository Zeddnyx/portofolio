"use client";
import { useState } from "react";
import { list } from "@/utils/data";
import { mono, mont } from "@/utils/fonts";
import { motion as m } from "framer-motion";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav>
      {/*Logo*/}
      <m.h3
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className={`${mont.className} text-xl md:text-2xl cursor-pointer`}
      >
        <a href="#home">Zedd.</a>
      </m.h3>

      {/*Desktop Navigation*/}
      <m.ul
        initial={{ x: 800 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className={`${mono.className} navDesktop text-base`}
      >
        {list.map((item, id) => (
          <li key={item.link} className="li-nav">
            <a href={`#${item.link}`}>
              <span className="text-cyan text-xs">0{id + 1}. </span>
              {item.link}
            </a>
          </li>
        ))}
        <li>
          <button className="btn w-20 p-5">
            <a href="resume.pdf" download="resume.pdf">
              Resume
            </a>
          </button>
        </li>
      </m.ul>

      {/*Menu Navigation*/}
      <m.button
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="menu"
        onClick={handleMenu}
      >
        <div>{!menu ? "Menu" : "Close"}</div>
      </m.button>

      {/*Mobile Navigation*/}
      <ul
        onClick={handleMenu}
        className={`${mono.className} ${!menu ? "navMobileOff" : `left-0`
          } navMobile`}
      >
        {list.map((item, id) => (
          <li key={item.link} className="li-nav text-lg ">
            <span className="text-cyan text-xs">0{id + 1}. </span>
            <a href={`#${item.link}`}>{item.link}</a>
          </li>
        ))}
        <li>
          <button className="btn w-28 p-5 py-6">
            <a href="resume.pdf" download="resume.pdf">
              Resume
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
}
