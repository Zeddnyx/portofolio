import React from "react";
import Image from "next/image";
import { mont, mono } from "@/utils/fonts";
import { MotionOpacity } from "@/components/Motion";

export default function About() {
  const tech: string[] = [
    "ReactJS",
    "Typescript",
    "NextJS 13",
    "Tailwind CSS",
    "Neovim (IDE)",
    "Javascript (ES6+)",
  ];
  return (
    <MotionOpacity className="mb-20 py-36 xl3:mx-40" id="about">
      <h2 className={mont.className}>
        <span className={`${mono.className} text-lg md:text-2xl text-cyan`}>
          01.{" "}
        </span>
        About Me
      </h2>
      <div className="parent-about">
        <div className={`${mont.className} about-desc-parent`}>
          <p className="break-normal">
            Hi, My name is <span className="text-cyan">Jaenudin</span> but i
            would like if you call me <span className="text-cyan">Zedd</span> or{" "}
            <span className="text-cyan">Jay</span>, i'm a self-tough frontend
            developer who loves to create beautiful and functional websites. In
            my spare time, configuring Neovim to streamline my workflow. I am
            passionate about learning new technologies and staying up-to-date
            with the latest trends in web development.
          </p>
          <p>Here are a few technologies i've been working with recently</p>
          <ul className="ul-tech">
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
    </MotionOpacity>
  );
}
