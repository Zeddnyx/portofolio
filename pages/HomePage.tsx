import { mont, pop, mono } from "@/utils/fonts";
import { MotionDownOpacity } from "@/components/Motion";

export default function HomePage() {
  const isWork = true;
  return (
    <MotionDownOpacity
      id="home"
      className={`${mont.className} pt-40 mb-60 md:mb-80`}
    >
      <div className="grid gap-2">
        <p className="text-cyan">Hi, i'am</p>
        <div className={`${pop.className} grid gap-1`}>
          <h1>Jaenudin.</h1>
          <h1 className="text-gray3">I build things for the web.</h1>
        </div>
        <p className="xs:pr-0 sm:pr-44 md:pr-72 xl:pr-[590px]">
          i'm a frontend developer, passionate about learning and collaboration,
          i'm currently working at Gebra Kreative Global
        </p>
      </div>
      {!isWork && (
        <a
          target="_blank"
          href="mailto:zeddnyx08@gmail.com"
          className={mono.className}
        >
          <button className="btn mt-10 w-28 h-10 relative">
            <div className="animate-ping absolute top-2 left-2">
              <div className="w-2 h-2 bg-cyan rounded-full"></div>
            </div>
            Hire Me
          </button>
        </a>
      )}
    </MotionDownOpacity>
  );
}
