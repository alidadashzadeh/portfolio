import Link from "next/link";
import { FiDownload } from "react-icons/fi";

import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";

export default function Page() {
	return (
		<section className="h-full">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
					{/* TEXT */}
					<div className="text-center xl:text-left order-2 xl:order-none">
						<span className="text-xl">software developer</span>

						<h1 className="h1">
							Hello, I am <br />
							<span className="text-accent">Ali Dadashzadeh</span>
						</h1>

						<p className="max-w-[500px] mb-9 text-white/80 text-lg">
							Software Engineer with a strong focus on designing and developing
							high-performance, user-centric web applications. Experienced in
							full-stack development, system design, and delivering reliable
							solutions using modern technologies and best practices.
						</p>

						{/* CTA + SOCIALS */}
						<div className="flex flex-col xl:flex-row items-center gap-8">
							<div className="mb-8 xl:mb-0 flex items-center gap-4">
								{/* PROJECTS CTA */}
								<Button>
									<Link href="/projects" className="px-5 py-2 ">
										View Projects
									</Link>
								</Button>

								{/* CV BUTTON */}
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

								{/* SOCIALS */}
								<Socials
									containerStyles="flex gap-6"
									iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-xl hover:bg-accent hover:text-primary transition-all duration-300"
								/>
							</div>
						</div>
					</div>

					{/* PHOTO */}
					<div className="order-1 xl:order-none mb-8 xl:mb-0">
						<Photo />
					</div>
				</div>
			</div>
		</section>
	);
}
