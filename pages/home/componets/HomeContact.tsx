"use client";
import React from "react";
import { mono, mont } from "@/utils/fonts";
import { MotionUpOpacity } from "@/components/Motion";

export default function Contact() {
  const isWork = true;
  return (
    <MotionUpOpacity className="contact" id="contact">
      <div>
        <span className={`${mono.className} text-xs md:text-lg text-cyan`}>
          04. What's Next?
        </span>
        <h2 className={mont.className}>Get In Touch</h2>
      </div>
      <p className={`${mont.className} max-w-[600px]`}>
        {isWork
          ? "I'm currently didn't looking for any new opportunities, but my inbox is always open. Whatever you have a question or just to say hi, i'll try my best to get back to you"
          : "I'm currently looking for any new opportunities, my inbox is always open. Whatever you have a question or just to say hi, i'll try my best to get back to you"}
      </p>
      <button type="submit" className={`${mono.className} mt-5 btn w-28`}>
        <a target="_blank" href="mailto:zeddnyx08@gmail.com">
          Say Hello
        </a>
      </button>
    </MotionUpOpacity>
  );
}
