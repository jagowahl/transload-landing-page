import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, Newspaper } from "lucide-react";


export default function Hero({ language }) {
	const content = {
		en: {
			title: "Fewer Empty Runs in the Transshipment Warehouse",
			description:
				"Supercharge Your Transshipment Warehouse with Our Smart Forklift Navigation System",
		},
		de: {
			title: "Staplerleitsystem für Umschlaglager",
			description:
			"Leerfahrten reduzieren - Kosten sparen"
		},
	};

	const { title, description, cta, newsletterUrl } = content[language];

	return (
		<section className="relative py-20 overflow-hidden">
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gray-900 opacity-60"></div>
				<div className="absolute inset-0 bg-[url('/bg_image.png')] bg-cover bg-center mix-blend-overlay opacity-100"></div>
			</div>
			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center">
					<h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
						{title}
					</h1>
					<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
						{description}
					</p>
					<Button
						asChild
						className="bg-orange-500 text-xl whitespace-normal h-auto text-white hover:bg-orange-600 shadow-lg hover:shadow-xl hover:scale-105">
						<Link href="https://share.hsforms.com/1jvcgnOE4RLiOJSGOdSJM6gt0skb">
							<Newspaper className="mr-2 h-5 w-5" />
							<div className="whitespace-normal text-xl">{language === "de" ? "Für Newsletter anmelden" : "Sign up for Newsletter"}</div>
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
