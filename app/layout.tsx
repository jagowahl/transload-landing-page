import "@/app/_styles/globals.css";

export const metadata = {
	title: "transload",
	description: "Revolutionizing Intralogistics",
	keywords: ["Intralogistics", "Transshipment Warehouse", "Forklift", "Pallet Truck", "Route Optimization", "Cost Savings"],
	openGraph: {
		images: './logo_dark.png',
	},
	icons: {
		icon: './favicon.png',
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
