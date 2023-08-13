"use client"
import { experience as exp } from "@/utils/data";
import { mono, mont } from "@/utils/fonts";
import { useState } from "react";
import Aos from "@/components/Aos";

interface IExperience {
  exp: {
    id: number;
    title: string;
    date: string;
    story: string;
  }[];
  current?: number;
  setCurrent?: (id: number) => void;
}

export default function Experience() {
  const [current, setCurrent] = useState<number>(0);

  return (
    <Aos>
      <section className="sm:mx-10 py-40 lg:mx-10 xl:mx-40 mt-40" id="experience">
        <h2 className={mont.className}>
          <span className={`${mono.className} text-lg md:text-2xl text-cyan`}>
            03.{" "}
          </span>
          Where I've Worked
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-3 w-full">
          <div>
            <Title exp={exp} current={current} setCurrent={setCurrent} />
          </div>

          <div className="col-span-4">
            <Item exp={exp} current={current} />
          </div>
        </div>
      </section>
    </Aos>
  );
}

const Title = ({ exp, setCurrent, current = 0 }: IExperience) => {
  return (
    <div className="experience-list">
      {exp.map((item) => {
        return (
          <button
            onClick={() => setCurrent?.(item.id)}
            className={`experience-title ${
              current === item.id ? "experience-title-active" : ""
            }`}
            key={item.id}
          >
            <p>{item.title}</p>
          </button>
        );
      })}
    </div>
  );
};

const Item = ({ exp, current = 0 }: IExperience) => {
  return (
    <>
      <div className="experience-item">
        <div>
          <h3>{exp[current]?.title}</h3>
          <p>{exp[current]?.date}</p>
        </div>
      </div>
      <p>{exp[current]?.story}</p>
    </>
  );
};
