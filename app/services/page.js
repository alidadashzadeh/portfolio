"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Web development creates websites and apps, blending design with coding. It includes front-end (HTML, CSS, JavaScript) and back-end (server-side) development, focusing on functionality and user experience.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Web development creates websites and apps, blending design with coding. It includes front-end (HTML, CSS, JavaScript) and back-end (server-side) development, focusing on functionality and user experience.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Web development creates websites and apps, blending design with coding. It includes front-end (HTML, CSS, JavaScript) and back-end (server-side) development, focusing on functionality and user experience.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Web development creates websites and apps, blending design with coding. It includes front-end (HTML, CSS, JavaScript) and back-end (server-side) development, focusing on functionality and user experience.",
    href: "",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, i) => {
            return (
              <div
                key={i}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center ">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent flex justify-center items-center transition-all duration-500 hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/80">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
