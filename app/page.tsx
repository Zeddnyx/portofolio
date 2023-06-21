"use client";
import { useState } from "react";
import HomePage from "@/pages/HomePage";
import About from "@/pages/About";
import Work from "@/pages/Work";
import Contact from "@/pages/Contact";
import Experience from "@/pages/experience/Experience";

export default function Home() {
  const [currentExp, setCurrentExp] = useState<number>(0);

  const onClickTitle = (clickedTitle: number) => {
    setCurrentExp(clickedTitle);
  };

  return (
    <main>
      <HomePage />
      <About />
      <Experience currentExp={currentExp} onClickTitle={onClickTitle} />
      <Work />
      <Contact />
    </main>
  );
}
