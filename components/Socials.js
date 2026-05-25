import { socials } from "@/constants/socials";
import Link from "next/link";

export default function Socials({ containerStyles, iconStyles }) {
	return (
		<div className={containerStyles}>
			{socials.map((social, i) => {
				return (
					<Link key={i} href={social.path} className={iconStyles}>
						{social.icon}
					</Link>
				);
			})}
		</div>
	);
}
