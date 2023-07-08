"use client";
import { useState, lazy, Suspense } from "react";
const HomePage = lazy(() => import("@/pages/HomePage"));
const About = lazy(() => import("@/pages/About"));
const Work = lazy(() => import("@/pages/Work"));
const Contact = lazy(() => import("@/pages/Contact"));
const Experience = lazy(() => import("@/pages/experience/Experience"));
import Loading from "@/app/loading";

export default function Home() {
  const [currentExp, setCurrentExp] = useState<number>(0);

  const onClickTitle = (clickedTitle: number) => {
    setCurrentExp(clickedTitle);
  };

  return (
    <main>
      <Suspense fallback={<Loading />} >
        <HomePage />
        <About />
        {/* <Experience currentExp={currentExp} onClickTitle={onClickTitle} /> */}
        <Work />
        <Contact />
      </Suspense>
    </main>
  );
}
