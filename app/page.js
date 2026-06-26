import Link from "next/link";
import { FiDownload } from "react-icons/fi";

import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";

export default function Page() {
	return (
		<section className="min-h-screen">
			<div className="container mx-auto h-full px-4">
				<div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:pt-8 xl:pb-24">
					{/* TEXT */}
					<div className="order-2 xl:order-none text-center xl:text-left max-w-[700px]">
						<span className="text-lg sm:text-xl">software developer</span>

						<h1 className="h1 mt-2">
							Hello, I am <br />
							<span className="text-accent">Ali Dadashzadeh</span>
						</h1>

						<p className="max-w-[600px] mx-auto xl:mx-0 mb-10 text-white/80 text-base md:text-lg leading-relaxed">
							Software Engineer with a strong focus on designing and developing
							high-performance, user-centric web applications. Experienced in
							full-stack development, system design, and delivering reliable
							solutions using modern technologies and best practices.
						</p>

						{/* CTA + SOCIALS */}
						<div className="flex flex-col items-center xl:items-start gap-8">
							{/* Buttons */}
							<div className="flex flex-col sm:flex-row items-center gap-4">
								<Button asChild>
									<Link href="/projects" className="px-6">
										View Projects
									</Link>
								</Button>

								<Button
									asChild
									variant="outline"
									className="border-accent text-accent hover:bg-accent hover:text-primary rounded-full"
								>
									<a href="/Ali_Dadashzadeh_CV.pdf" download>
										<FiDownload className="mr-2" />
										Download CV
									</a>
								</Button>
							</div>

							{/* Socials */}
							<Socials
								containerStyles="flex flex-wrap justify-center xl:justify-start gap-4"
								iconStyles="w-10 h-10 border border-accent rounded-full flex items-center justify-center text-accent text-xl hover:bg-accent hover:text-primary transition-all duration-300"
							/>
						</div>
					</div>

					{/* PHOTO */}
					<div className="order-1 xl:order-none w-full flex justify-center">
						<Photo />
					</div>
				</div>
			</div>
		</section>
	);
}
