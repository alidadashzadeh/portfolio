"use client";

import { info } from "@/constants/contactInfo";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex items-center py-10 xl:py-12"
		>
			<div className="container mx-auto">
				<div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-10 xl:gap-16 items-center">
					{/* Left content */}
					<div className="space-y-6">
						<span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
							Get in touch
						</span>

						<div className="space-y-4">
							<h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white">
								Let&apos;s build something useful together.
							</h1>

							<p className="max-w-[620px] text-white/60 leading-relaxed">
								I&apos;m open to web development opportunities, portfolio
								collaborations, and engineering-related roles. Feel free to
								reach out by email or phone, or connect with me through LinkedIn
								and GitHub.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 pt-2">
							<Link
								href="mailto:a.dadashzadeh89@gmail.com"
								className="inline-flex h-[52px] items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-primary transition-all hover:bg-accent-hover"
							>
								Email Me
							</Link>

							<Link
								href="tel:+16478778157"
								className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/20 px-8 text-base font-semibold text-white transition-all hover:border-accent hover:text-accent"
							>
								Call Me
							</Link>
						</div>
					</div>

					{/* Contact info */}
					<div className="rounded-2xl border border-white/10 bg-[#27272c] p-6 md:p-8 shadow-2xl shadow-black/20">
						<ul className="flex flex-col gap-5">
							{info.map((item, i) => {
								const content = (
									<div className="group flex items-center gap-5 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-accent/40 hover:bg-white/[0.04]">
										<div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-lg bg-black/20 text-accent">
											<div className="text-[24px]">{item.icon}</div>
										</div>

										<div className="min-w-0 flex-1">
											<p className="text-sm text-white/50">{item.title}</p>
											<h3 className="break-words text-lg font-medium text-white group-hover:text-accent transition-all">
												{item.description}
											</h3>
										</div>
									</div>
								);

								return (
									<li key={i}>
										{item.href ? (
											<Link
												href={item.href}
												target={
													item.href.startsWith("http") ? "_blank" : undefined
												}
											>
												{content}
											</Link>
										) : (
											content
										)}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
