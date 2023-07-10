import { MotionOpacity } from "@/components/Motion";
import { experience as exp } from "@/utils/data";
import { mono, mont } from "@/utils/fonts";
import { useState } from "react";

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
    <MotionOpacity>
      <div className="sm:mx-10 py-40 lg:mx-10 xl:mx-40 mt-40" id="experience">
        <h2 className={mont.className}>
          <span className={`${mono.className} text-lg md:text-2xl text-cyan`}>
            03.{" "}
          </span>
          Where I've Worked
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-3">
          <div>
            <Title exp={exp} setCurrent={setCurrent} />
          </div>

          <div className="col-span-4">
            <Item exp={exp} current={current} />
          </div>
        </div>
      </div>
    </MotionOpacity>
  );
}

const Title = ({ exp, setCurrent }: IExperience) => {
  return (
    <div className="experience-list">
      {exp.map((item) => {
        return (
          <button
            onClick={() => setCurrent?.(item.id)}
            className="experience-title"
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

