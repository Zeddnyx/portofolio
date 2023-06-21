import Title from "./Title";
import ExperienceItem from "./Item";
import { mono, mont } from "@/utils/fonts";
import { motion as m } from "framer-motion";

export default function Experience({ currentExp, onClickTitle }) {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      className="sm:mx-10 py-40 lg:mx-10 xl:mx-20 mt-40"
      id="experience"
    >
      <h2 className={mont.className}>
        <span className={`${mono.className} text-lg md:text-2xl text-cyan`}>
          02.{" "}
        </span>
        Where I've Worked
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-3">
        <div>
          <Title currentExp={currentExp} onClickTitle={onClickTitle} />
        </div>
        <div className="col-span-4">
          <ExperienceItem currentExp={currentExp} />
        </div>
      </div>
    </m.section>
  );
}
