import "@/app/_styles/globals.css";

export const metadata = {
	title: "transload - Fewer Empty Runs in the Transshipment Warehouse",
	description: "Supercharge Your Transshipment Warehouse with Our Smart Forklift Navigation System",
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
		<html lang="de">
			<body>{children}</body>
		</html>
	);
}
