"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
				<div className="container mx-auto space-y-10">
					{/* TOP ROW */}
					<div className="flex flex-col xl:flex-row gap-10 items-start">
						<div className="flex-1 flex flex-col gap-5 min-h-[320px]">
							<AnimatePresence mode="wait">
								<motion.div
									key={project.num}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.2 }}
									className="flex flex-col gap-5"
								>
									<div className="text-7xl xl:text-8xl font-extrabold text-transparent text-outline leading-none">
										{project.num}
									</div>

									<div className="space-y-1">
										<h2 className="text-[34px] md:text-[42px] font-bold text-white capitalize leading-tight">
											{project.category}
										</h2>

										<h3 className="text-2xl md:text-3xl font-semibold text-accent">
											{project.title}
										</h3>
									</div>

									<p className="max-w-[600px] text-white/60 leading-relaxed min-h-[72px]">
										{project.description}
									</p>
								</motion.div>
							</AnimatePresence>
						</div>

						{/* VIDEO */}
						<div className="w-full xl:w-[520px] flex-shrink-0">
							<Swiper
								spaceBetween={30}
								slidesPerView={1}
								onSlideChange={handleSlideChange}
							>
								{projects.map((projectItem, i) => (
									<SwiperSlide key={i}>
										<div className="relative w-full h-[280px] xl:h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-black">
											{projectItem?.video ? (
												<video
													src={projectItem.video}
													controls
													muted
													playsInline
													className="h-full w-full object-cover"
												/>
											) : (
												<Image
													src={projectItem.image}
													alt={projectItem.title}
													fill
													className="absolute inset-0 h-full w-full object-cover"
												/>
											)}
										</div>
									</SwiperSlide>
								))}

								<WorkSliderBtns
									containerStyles="flex gap-3 justify-end mt-4"
									btnStyles="bg-accent text-primary w-[44px] h-[44px] rounded-md flex items-center justify-center"
								/>
							</Swiper>
						</div>
					</div>

					{/* BOTTOM FULL WIDTH */}
					<div className="space-y-6">
						{/* Highlights */}
						<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 min-h-[110px]">
							<h3 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
								Technical Highlights
							</h3>

							<div className="flex flex-wrap gap-2">
								<AnimatePresence mode="popLayout">
									{project.highlights?.map((item) => (
										<motion.div
											key={item}
											layout
											initial={{ opacity: 0, scale: 0.9 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 0.9 }}
											className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white/80 hover:border-accent/40 hover:bg-accent/10 transition-all"
										>
											{item}
										</motion.div>
									))}
								</AnimatePresence>
							</div>
						</div>

						{/* Stack + Links */}
						<div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
							<ul className="flex flex-wrap gap-2 min-h-[34px]">
								<AnimatePresence mode="popLayout">
									{project.stack.map((item) => (
										<motion.li
											key={item.name}
											layout
											initial={{ opacity: 0, scale: 0.9 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 0.9 }}
											className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm border border-accent/20"
										>
											{item.name}
										</motion.li>
									))}
								</AnimatePresence>
							</ul>

							<div className="flex gap-4 items-center">
								<Link href={project.live} target="_blank">
									<Tooltip>
										<TooltipTrigger className="w-[58px] h-[58px] rounded-full bg-white/5 hover:bg-white/10 flex justify-center items-center">
											<BsArrowUpRight className="text-white text-2xl" />
										</TooltipTrigger>
										<TooltipContent side="top">
											<p className="text-sm ">Live Demo</p>
										</TooltipContent>
									</Tooltip>
								</Link>

								<Link href={project.github} target="_blank">
									<Tooltip>
										<TooltipTrigger className="w-[58px] h-[58px] rounded-full bg-white/5 hover:bg-white/10 flex justify-center items-center">
											<BsGithub className="text-white text-2xl" />
										</TooltipTrigger>
										<TooltipContent side="top">
											<p className="text-sm ">GitHub Repository</p>
										</TooltipContent>
									</Tooltip>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</motion.section>
		</TooltipProvider>
	);
}
