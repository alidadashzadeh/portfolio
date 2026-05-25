"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import WorkSliderBtns from "@/components/WorkSliderBtns";
import { projects } from "@/constants/projects";

export default function Projects() {
	const [project, setProject] = useState(projects[0]);

	function handleSlideChange(swiper) {
		const currentIndex = swiper.activeIndex;
		setProject(projects[currentIndex]);
	}

	return (
		<TooltipProvider delayDuration={100}>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
				}}
				className="min-h-[80vh] flex flex-col justify-center py-10 xl:py-12 xl:px-0"
			>
				<div className="container mx-auto">
					<div className="flex flex-col xl:flex-row xl:items-center xl:gap-[30px]">
						{/* Project info */}
						<div className="w-full xl:w-[50%] order-2 xl:order-none">
							<div className="flex flex-col gap-5 xl:gap-7">
								<div className="text-7xl xl:text-8xl leading-none font-extrabold text-transparent text-outline">
									{project.num}
								</div>

								<h2 className="text-[34px] md:text-[42px] font-bold leading-tight text-white capitalize">
									{project.category}
								</h2>

								<p className="max-w-[560px] text-white/60 leading-relaxed">
									{project.description}
								</p>

								<ul className="flex flex-wrap gap-x-3 gap-y-2">
									{project.stack.map((item, i) => (
										<li key={i} className="text-accent text-base md:text-lg">
											{item.name}
											{i !== project.stack.length - 1 && ","}
										</li>
									))}
								</ul>

								<div className="border border-white/20"></div>

								<div className="flex gap-4 items-center">
									<Link href={project.live} target="_blank">
										<Tooltip>
											<TooltipTrigger className="w-[58px] h-[58px] md:w-[64px] md:h-[64px] rounded-full bg-white/5 hover:bg-white/10 flex justify-center items-center group transition-all">
												<BsArrowUpRight className="text-white text-2xl md:text-3xl group-hover:text-accent transition-all" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Live Project</p>
											</TooltipContent>
										</Tooltip>
									</Link>

									<Link href={project.github} target="_blank">
										<Tooltip>
											<TooltipTrigger className="w-[58px] h-[58px] md:w-[64px] md:h-[64px] rounded-full bg-white/5 hover:bg-white/10 flex justify-center items-center group transition-all">
												<BsGithub className="text-white text-2xl md:text-3xl group-hover:text-accent transition-all" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Github Repo</p>
											</TooltipContent>
										</Tooltip>
									</Link>
								</div>
							</div>
						</div>

						{/* Project slider */}
						<div className="w-full xl:w-[50%] mb-10 xl:mb-0">
							<Swiper
								spaceBetween={30}
								slidesPerView={1}
								className="relative"
								onSlideChange={handleSlideChange}
							>
								{projects.map((projectItem, i) => (
									<SwiperSlide key={i} className="w-full">
										<div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/30">
											<div className="absolute inset-0 z-10 bg-black/5 pointer-events-none"></div>

											{projectItem?.video ? (
												<video
													src={projectItem.video}
													controls
													muted
													playsInline
													preload="metadata"
													className="absolute inset-0 h-full w-full object-cover"
												/>
											) : (
												<Image
													src={projectItem.image}
													alt={projectItem.title}
													className="absolute inset-0 h-full w-full object-cover"
													fill
												/>
											)}
										</div>
									</SwiperSlide>
								))}

								<WorkSliderBtns
									containerStyles="flex gap-3 justify-end mt-4"
									btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-md"
								/>
							</Swiper>
						</div>
					</div>
				</div>
			</motion.section>
		</TooltipProvider>
	);
}
