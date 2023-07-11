import { mont, pop} from "@/utils/fonts";
import { MotionDownOpacity } from "@/components/Motion";

export default function HomePage() {

  return (
    <MotionDownOpacity id="home" className={`${mont.className} py-40 my-36 mb-96 md:mb-80`}>
      <div className="grid gap-2">
        <p className="text-cyan">Hi, i'am</p>
        <div className={`${pop.className} grid gap-1`}>
          <h1>Jaenudin.</h1>
          <h1 className="text-gray3">I build things for the web.</h1>
        </div>
        <p className="xs:pr-0 sm:pr-44 md:pr-72 xl:pr-[590px]">
          i'm a frontend developer, passionate about learning and collaboration,
          i'm currently looking for any new opportunities.
        </p>
      </div>
    </MotionDownOpacity>
  );
}
