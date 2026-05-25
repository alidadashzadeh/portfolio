"use client";

import { links } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
	const pathname = usePathname();
	return (
		<nav className="flex gap-8">
			{links.map((link, i) => (
				<Link
					href={link.path}
					key={i}
					className={`${
						link.path === pathname && "text-accent border-b-2 border-accent"
					} capitalize font-medium hover:text-accent transition-all`}
				>
					{link.name}
				</Link>
			))}
		</nav>
	);
}
