import Image from "next/image";
import { mono, mont } from "@/utils/fonts";
import { project, otherProject } from "@/utils/data";
import { FiGithub, FiFolder } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { motion as m } from "framer-motion";

export default function page() {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      className="h-[100%] py-48 mt-40 pb-20 xl:mx-20"
      id="work"
    >
      <h2 className={mont.className}>
        <span className={`${mono.className} text-lg md:text-2xl text-cyan`}>
          03.{" "}
        </span>
        Some Things I've Built
      </h2>
      <div className="parent-work">
        {project.map((item, id) => {
          return (
            <div key={id} className="parent-project-card">
              <div className="parent-project">
                <a href={item.live ? item.live : item.link}>
                  <h3 className="project-title">
                    {item.title}
                  </h3>
                </a>

                <div className="project-desc">
                  <p className="leading-6">{item.desc}</p>
                </div>

                <ul className={`${mono.className} ul-tech-tag`}>
                  {item.tech.map((item, id) => (
                    <li className="rounded-bg-cyan2" key={id}>{item}</li>
                  ))}
                </ul>

                <div className="flex gap-4 items-center">
                  <a className="hover:text-cyan" href={item.link}>
                    <FiGithub size="20" />
                  </a>
                  {/* !! means item.lenght != 0*/}
                  <span className="hover:text-cyan">
                    {!!item.live ? (
                      <a href={item.live}>
                        <BiLinkExternal size="20" />
                      </a>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </div>

              <div className="parent-img">
                <Image
                  className="child-parent-img-1"
                  src={item.image}
                  width={500}
                  height={500}
                  alt={item.title}
                  quality={50}
                />
                <div className="child-parent-img-2"></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-14">
        <h3 className="text-center mb-4">Other Noteworthy Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {otherProject.map((item, id) => (
            <div key={item.title} className="p-5 bg-mainBg2 grid gap-3 rounded">
              <div className="flex items-center justify-between">
                <i className="text-cyan">
                  <FiFolder size="30" />
                </i>
                <div className="flex gap-4 items-center">
                  <a className="hover:text-cyan" href={item.link}>
                    <FiGithub size="20" />
                  </a>
                  <span className="hover:text-cyan">
                    {!!item.live ? (
                      <a href={item.live}>
                        <BiLinkExternal size="20" />
                      </a>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </div>

              <a href={item.live ? item.live : item.link}>
                <h3 className="text-gray1 text-xl hover:text-cyan cursor-pointer">
                  {item.title}
                </h3>
              </a>
              <p>{item.desc}</p>
              <ul  className={`${mono.className} ul-tech-tag`}>
                {item.tech.map((item, id) => (
                  <li className="rounded-bg-cyan1" key={id}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </m.section>
  );
}
