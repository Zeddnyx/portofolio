"use client"
import HomePage from "@/pages/HomePage"
import About  from "@/pages/About"
import Experience from "@/pages/Experience"
import Work  from "@/pages/Work"
import Contact  from "@/pages/Contact"

export default function page() {
  return (
    <main>
      <HomePage />
      <About />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}
