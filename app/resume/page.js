"use client";

import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  Tabs,
  tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import About from "@/components/About";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, erat ut tincidunt varius, nunc urna sollicitudin lorem, vel vestibulum lectus ante vel lorem. Sed nec risus et purus.",
  info: [
    { fieldName: "Name", fieldValue: "Ali Dadashzadeh" },
    { fieldName: "Phone", fieldValue: "+1 647 877 8157" },
    { fieldName: "Experience", fieldValue: "2+ years" },
    { fieldName: "Nationality", fieldValue: "Iran" },
    { fieldName: "Email", fieldValue: "Adadashzadeh89@gmail.com" },
    { fieldName: "Language", fieldValue: "Turkish, Persian, Arabic" },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, erat ut tincidunt varius, ",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - present",
    },
    {
      company: "E-commerce Startup",
      position: "FreeLance Web Developer",
      duration: "2020 - 2022",
    },
    {
      company: "ABC Technologies Inc.",
      position: "UI/UX Designer",
      duration: "2018 - 2020",
    },
    {
      company: "ABC Technologies Inc.",
      position: "UI/UX Designer",
      duration: "2018 - 2020",
    },
    {
      company: "ABC Technologies Inc.",
      position: "UI/UX Designer",
      duration: "2018 - 2020",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, erat ut tincidunt varius, ",
  items: [
    {
      institution: "Udemy",
      degree: "Full React development",
      duration: "2023-2024",
    },
    {
      institution: "Udemy",
      degree: "Javascript - Begginer to Professional",
      duration: "2022-2023",
    },
    {
      institution: "Tabriz University",
      degree: "Master of science in Mechanical engineering ",
      duration: "2012-2015",
    },
    {
      institution: "Tabriz University",
      degree: "Bachelor of science in Mechanical engineering ",
      duration: "2008-2012",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, erat ut tincidunt varius, ",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "",
    },
  ],
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0
      "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience">
              <Experience experience={experience} className="w-full" />
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <Education education={education} />
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <Skills skills={skills} />
            </TabsContent>
            <TabsContent
              value="about"
              className="text-center w-full xl:text-left"
            >
              <About about={about} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
