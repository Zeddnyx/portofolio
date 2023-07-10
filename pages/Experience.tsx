import { MotionOpacity } from "@/components/Motion";
import { experience as exp } from "@/utils/data";
import { mono, mont } from "@/utils/fonts";
import { useState } from "react";

interface IExperience {
  exp: {
    title: string;
    date: string;
    story: string;
  }[];
  current?: number;
  onClick?: (id: number) => void;
}

export default function Experience() {
  const [current, setCurrent] = useState(0);

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
            <Title exp={exp} onClick={(id) => setCurrent(id)} />
          </div>

          <div className="col-span-4">
            <Item exp={exp} current={current} />
          </div>
        </div>
      </div>
    </MotionOpacity>
  );
}

const Title = ({ exp, onClick }: IExperience) => {
  return (
    <div className="experience-list">
      {exp.map((item, id) => {
        return (
          <button
            onClick={() => onClick(id)}
            className="experience-title"
            key={id}
          >
            <p>{item.title}</p>
          </button>
        );
      })}
    </div>
  );
};

const Item = ({ exp, current }: IExperience) => {
  return (
    <>
      <div className="experience-item">
        <div>
          <h3>{exp[current].title}</h3>
          <p>{exp[current].date}</p>
        </div>
      </div>
      <p>{exp[current].story}</p>
    </>
  );
};
