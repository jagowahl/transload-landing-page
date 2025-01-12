import "@/app/_styles/globals.css";

export const metadata = {
	title: "transload",
	description: "Revolutionizing Intralogistics",
	icons: {
		icon: './favicon.svg',
	  },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
