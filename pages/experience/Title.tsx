import { experience } from "@/utils/data";
import { mono } from "@/utils/fonts";

export default function Title({ onClickTitle }: any) {
  return (
    <div className="experience-list">
      {experience.map((item, id) => {
        return (
          <button
            onClick={() => onClickTitle(item.id)}
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
