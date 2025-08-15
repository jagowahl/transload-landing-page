import { Button } from "@/components/ui/button";
import { ArrowDown, Zap } from "lucide-react";

export default function Hero({ language }: { language: "en" | "de" }) {
	const content = {
		en: {
			title: "Forklift Control System for Cross Docking Warehouses",
			subtitle: "Revolutionize Your Warehouse Operations",
			description: "Fewer Empty Runs. Lower Costs. Higher Productivity.",
		},
		de: {
			title: "Staplerleitsystem für Umschlaglager",
			subtitle: "Revolutionieren Sie Ihre Lagerabläufe",
			description:
				"Weniger Leerfahrten. Geringere Kosten. Höhere Produktivität.",
		},
	};

	const { title, subtitle, description } =
		content[language as keyof typeof content];

	return (
		<section className="relative py-20 lg:py-32 overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700"></div>
				<div className="absolute inset-0 bg-[url('/bg_image.png')] bg-cover bg-center opacity-10"></div>
				{/* Animated background elements */}
				<div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
				<div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					<div className="inline-flex items-center px-4 py-2 bg-orange-400/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-medium mb-6">
						<Zap className="w-4 h-4 mr-2" />
						{subtitle}
					</div>

					<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
						<span className="text-white">
							{title.split(" ").slice(0, -2).join(" ")}
						</span>
						<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
							{title.split(" ").slice(-2).join(" ")}
						</span>
					</h1>

					<p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
						{description}
					</p>
				</div>
			</div>
		</section>
	);
}
