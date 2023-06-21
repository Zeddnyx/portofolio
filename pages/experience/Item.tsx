import { experience } from "@/utils/data";
import { mono, mont } from "@/utils/fonts";

export default function ExperienceItem({ currentExp }){
  return (
    <div className={`${mont.className} experience-title-isi`}>
      <div>
        <h3 className="text-2xl">{experience[currentExp].title}</h3>
        <p className={mono.className}>{experience[currentExp].date}</p>
      </div>
      <div>
        <p>{experience[currentExp].story}</p>
      </div>
    </div>
  );
};
