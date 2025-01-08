import "@/app/_styles/globals.css";

export const metadata = {
	title: "transload.",
	description: "Revolutionizing Intralogistics",
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
