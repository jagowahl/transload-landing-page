import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, Newspaper } from "lucide-react";

export default function Hero({ language }) {
	const content = {
		en: {
			title: "Forklift Control System for Transshipment Warehouses",
			description: "Fewer Empty Runs. Lower Costs. Higher Productivity.",
		},
		de: {
			title: "Staplerleitsystem für Umschlaglager",
			description:
				"Weniger Leerfahrten. Geringere Kosten. Höhere Produktivität.",
		},
	};

	const { title, description, cta, newsletterUrl } = content[language];

	return (
		<section className="relative py-20 overflow-hidden">
			<div className="absolute inset-0 z-0 hidden md:block">
				<div className="absolute inset-0 bg-gray-800 opacity-60"></div>
				<div className="absolute inset-0 bg-[url('/bg_image.png')] blur-sm bg-cover bg-center mix-blend-overlay opacity-100"></div>
			</div>
			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center">
					<h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-orange-500">
						{title}
					</h1>
					<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
						{description}
					</p>
				</div>
			</div>
		</section>
	);
}
