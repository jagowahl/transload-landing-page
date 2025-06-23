import "@/app/_styles/globals.css";

export const metadata = {
	title: "transload - Staplerleitsystem für Umschlaglager",
	description: "Weniger Leerfahrten. Geringere Kosten. Höhere Produktivität.",
	keywords: [
		// Deutsch
		"Staplerleitsystem", "Umschlaglager", "Leerfahrten", "Kosten sparen", "Intralogistik", "Logistiksoftware",
		"Lagerverwaltungssystem", "Flurfördermittel", "Disposition Stapler", "Effizienzsteigerung Lager",
		"Automatisierung Umschlaglager", "KI in der Intralogistik", "Logistik Digitalisierung", "Start-Up", "Startup",
	  
		// Englisch
		"Intralogistics", "Transshipment Warehouse", "Forklift", "Pallet Truck", "Route Optimization", "Cost Savings",
		"Forklift Guidance System", "Warehouse Control System", "Fleet Management", "Material Flow Optimization",
		"Cross Docking Software", "Smart Warehouse", "AI Logistics"
	  ],
	openGraph: {
		images: './open_graph.png',
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
