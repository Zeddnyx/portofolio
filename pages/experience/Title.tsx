import { experience } from "@/utils/data";
import { mono } from "@/utils/fonts";
import { Props } from "./modules";

export default function Title({ onClickTitle }: Props) {
  return (
    <div className="experience-list">
      {experience.map((item, id) => {
        return (
          <button
            onClick={() => onClickTitle?.(id)} // cannot invoke an obj which is posibly undefined. just add ?.
            className="experience-title"
            key={id}
          >
            <p className={mono.className}>{item.title}</p>
          </button>
        );
      })}
    </div>
  );
}
