"use client";
import { mono } from "@/utils/fonts";
import { social } from "@/utils/data";
import { motion as m } from "framer-motion";

export default function footer() {
  return (
    <footer className={mono.className}>
      {/* Social Mobile */}
      <div className="md:hidden py-5 flex gap-7 items-center justify-center text-center">
        {social.slice(0, 3).map((item, id) => (
          <a key={id} href={item.link} className={`${mono.className} `}>
            <item.icon size="25" />
          </a>
        ))}
      </div>
      {/* Social Desktop */}
      <m.div
        initial={{ y: 330 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="social-desktop"
      >
        {social.slice(0, 3).map((item, id) => (
          <div className="flex flex-col items-center gap-2" key={id}>
            <div className="group flex gap-4">
              <a href={item.link} className={`${mono.className} li-nav`}>
                <item.icon size="25" />
              </a>
              <span className="hidden absolute bg-mainBg2 rounded left-10 p-2 text-xs  group-hover:flex">
                {/* Tooltip */}
                {item.title}
              </span>
            </div>
            <div className="h-16 w-px bg-gray1"></div>
          </div>
        ))}
      </m.div>

      {/* Social Desktop Mail */}
      <m.div
        initial={{ y: 330 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="social-desktop-email"
        style={{ writingMode: "vertical-lr" }}
      >
        <a
          className={`${mono.className} text-gray1 hover:text-cyan`}
          href={social[3].link}
        >
          {social[3].email}
        </a>
        <div className="h-16 w-px bg-gray1"></div>
      </m.div>
    </footer>
  );
}
