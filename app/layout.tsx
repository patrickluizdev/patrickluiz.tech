import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "Patrick Luiz - Especialista em Desenvolvimento e Segurança de Sistemas",
		template: "%s | Patrick Luiz - Especialista em Tecnologia"
	},
	description: "Especialista em Desenvolvimento, Segurança de Sistemas, Cloud Computing, e muito mais. Inspiro equipes a alcançarem objetivos individuais e coletivos.",
	openGraph: {
		title: "Patrick Luiz - Especialista em Tecnologia",
		description:
    "Sou um programador dedicado e participativo, especializado em Desenvolvimento, Segurança de Sistemas, Cloud Computing e muito mais. Inspiro equipes a alcançarem objetivos individuais e coletivos.",
		url: "https://patrickluiz.tech",
		siteName: "Patrick Luiz Tech",
		images: [
			{
				url: "https://patrickluiz.tech/SEO.png",
			},
		],
		locale: "pt-BR",
		type: "profile",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		shortcut: "/patrickluiztech-ico.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
