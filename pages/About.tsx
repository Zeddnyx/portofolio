import React from "react";
import Image from "next/image";
import { mont, mono } from "@/utils/fonts";
import { motion as m } from "framer-motion";

export default function About() {
  const tech: string[] = [
    "Javascript (ES6+)",
    "Typescript",
    "ReactJS",
    "NextJS",
    "Tailwind CSS",
    "Neovim (IDE)",
  ];
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 0.5 }}
      className="mb-20 py-36 xl3:mx-40"
      id="about"
    >
      <h2 className={mont.className} >
        <span className={`${mono.className} text-lg md:text-2xl text-cyan`}>
          01.{" "}
        </span>
        About Me
      </h2>
      <div className="parent-about">
        <div className={`${mont.className} about-desc-parent`}>
          <p className="break-normal">
            Hi, My name is <span className="text-cyan">Jaenudin</span> but i
            would like if you call me <span className="text-cyan">Zedd</span>,
            i'm a self-tough frontend developer who loves to create beautiful and
            functional websites. In my spare time, configuring Neovim to streamline my workflow. I am
            passionate about learning new technologies and staying up-to-date
            with the latest trends in web development.
          </p>
          <p>Here are a few technologies i've been working with recently</p>
          <ul className="w-72 lg:w-96 grid grid-cols-2 list-inside list-disc leading-5">
            {tech.map((item, id) => (
              <li key={id} className={`${mono.className} text-sm`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-img-parent">
          <div className="about-img-div"></div>
          <Image
            priority
            className="about-img-img"
            src="/me.jpg"
            width={800}
            height={800}
            alt="Zedd"
            quality={80}
          />
        </div>
      </div>
    </m.section>
  );
}
