import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero({ language }) {
	const content = {
		en: {
			title: "Revolutionizing Intralogistics",
			description:
				"Supercharge Your Transshipment Warehouse with Our Smart Forklift Navigation System",
		},
		de: {
			title: "Revolution der Intralogistik",
			description:
				"Optimieren Sie Ihr Umschlaglager mit unserem intelligenten Gabelstapler-Navigationssystem",
		},
	};

	const { title, description, cta, newsletterUrl } = content[language];

	return (
		<section className="relative py-20 overflow-hidden">
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-br from-orange-800 to-neutral-700 opacity-70"></div>
				<div className="absolute inset-0 bg-[url('/bg_image.png')] bg-cover bg-center mix-blend-overlay"></div>
			</div>
			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center">
					<h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
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
