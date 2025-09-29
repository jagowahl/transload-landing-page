import { Button } from "@/components/ui/button";
import { ArrowDown, Zap } from "lucide-react";

export default function Hero({ language }: { language: "en" | "de" }) {
	const content = {
		en: {
			title: "The next generation of intralogistics",
			description: "Join the warehousing revolution.",
		},
		de: {
			title: "Die nächste Generation der Intralogistik",
			description: "Revolutionieren Sie Ihre Lagerabläufe.",
		},
	};

	const { title, description } =
		content[language as keyof typeof content];

	return (
		<section className="relative py-20 lg:py-32 overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700"></div>
				<div className="absolute inset-0 bg-[url('/bg_image.png')] bg-cover bg-center opacity-30"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-4xl mx-auto flex justify-center">
					{/* Card */}
					<div className="backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 px-8 py-10 w-full text-center">
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
						<Button
							size="lg"
							className="inline-flex items-center space-x-2 px-8 py-4 text-lg font-bold rounded-full shadow-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none
								bg-orange-500/30 backdrop-blur-md border border-orange-400/40"
							style={{
								background:
									"linear-gradient(90deg, rgba(255,140,0,0.25) 0%, rgba(255,87,34,0.25) 100%)",
								boxShadow:
									"0 4px 32px 0 rgba(255,140,0,0.15), 0 1.5px 4px 0 rgba(255,87,34,0.10)",
							}}
						>
							<span className="drop-shadow-md">
								{language === "en" ? "Talk to Us" : "Sprechen Sie mit uns"}
							</span>
							<ArrowDown className="w-6 h-6 animate-bounce" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
