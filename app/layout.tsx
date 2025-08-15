import "@/app/_styles/globals.css";

export const metadata = {
	title: "transload - Staplerleitsystem für Umschlaglager",
	description: "Weniger Leerfahrten. Geringere Kosten. Höhere Produktivität.",
	themeColor: "#0C3A5F",
	keywords: [
		// Deutsch
		"Staplerleitsystem",
		"Umschlaglager",
		"Leerfahrten",
		"Kosten sparen",
		"Intralogistik",
		"Logistiksoftware",
		"Lagerverwaltungssystem",
		"Flurfördermittel",
		"Disposition Stapler",
		"Effizienzsteigerung Lager",
		"Automatisierung Umschlaglager",
		"KI in der Intralogistik",
		"Logistik Digitalisierung",
		"Start-Up",
		"Startup",

		// Englisch
		"Intralogistics",
		"Transshipment Warehouse",
		"Cross Docking Warehouse",
		"Cross Docking",
		"Forklift",
		"Pallet Truck",
		"Route Optimization",
		"Cost Savings",
		"Forklift Guidance System",
		"Warehouse Control System",
		"Fleet Management",
		"Material Flow Optimization",
		"Cross Docking Software",
		"Smart Warehouse",
		"AI Logistics",
	],
	openGraph: {
		type: "website",
		url: "https://www.trans-load.de",
		title: "transload - Staplerleitsystem für Umschlaglager",
		description: "Weniger Leerfahrten. Geringere Kosten. Höhere Produktivität.",
		images: "./open_graph.jpg",
	},
	icons: {
		icon: "./favicon.png",
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
