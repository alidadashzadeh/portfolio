"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { CiMenuFries } from "react-icons/ci";

const links = [
	{ name: "home", path: "/" },
	{ name: "projects", path: "/projects" },
	{ name: "contact", path: "/contact" },
];

export default function MobileNav() {
	const pathname = usePathname();

	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger className="flex justify-center items-center">
				<CiMenuFries className="text-[32px] text-accent" />
			</SheetTrigger>

			<SheetContent className="flex flex-col">
				{/* LOGO */}
				<div className="mt-32 mb-40 text-center text-2xl">
					<Link href="/" onClick={() => setOpen(false)}>
						<h1 className="text-4xl font-semibold">
							Ali D<span className="text-accent">.</span>
						</h1>
					</Link>
				</div>

				{/* nav */}
				<nav className="flex flex-col gap-8 justify-center items-center">
					{links.map((link, i) => {
						return (
							<Link
								href={link.path}
								key={i}
								onClick={() => setOpen(false)}
								className={`text-xl capitalize hover:text-accent transition-all ${
									link.path === pathname &&
									"text-accent border-b-2 border-accent"
								}`}
							>
								{link.name}
							</Link>
						);
					})}
				</nav>
			</SheetContent>
		</Sheet>
	);
}
