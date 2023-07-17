import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Msgs",
	description: "Created By Ashmeet Singh Monga",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`w-screen h-screen flex justify-center bg-[#000E08] ${poppins.className}`}>
				<ToasterProvider />
				<div className='w-full h-full md:w-1/4'>{children}</div>
			</body>
		</html>
	);
}
