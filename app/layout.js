import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: {
		default: "Ali Dadashzadeh | Full Stack Developer",
		template: "%s | Ali Dadashzadeh",
	},
	description:
		"Portfolio of Ali Dadashzadeh — Full Stack Developer building modern real-time web applications with Next.js, React, Node.js, TypeScript, PostgreSQL, Supabase, SQL, MongoDB, and Socket.IO.",
	keywords: [
		"Ali Dadashzadeh",
		"Full Stack Developer",
		"Next.js Developer",
		"React Developer",
		"Node.js",
		"TypeScript",
		"PostgreSQL",
		"Supabase",
		"SQL",
		"MongoDB",
		"Socket.IO",
		"Web Developer Portfolio",
	],
	authors: [{ name: "Ali Dadashzadeh" }],
	creator: "Ali Dadashzadeh",
	icons: {
		icon: "/icon.png",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${jetBrainsMono.className} bg-primary text-white`}>
				<Header />
				<StairTransition />
				<PageTransition>{children}</PageTransition>
			</body>
		</html>
	);
}
