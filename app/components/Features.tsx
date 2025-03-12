import { Forklift, BarChart2, Users } from "lucide-react";

const features = {
	en: [
		{
			icon: Forklift,
			description: "Our algorithms optimize your forklift routes in real-time",
			title: "Smart Routing",
		},
		{
			icon: Users,
			title: "Human-Centric Design",
			description: "Boost driver productivity and work comfort",
		},
		{
			icon: BarChart2,
			title: "Performance Analytics",
			description: "Comprehensive data insights for continuous improvement",
		},
	],
	de: [
		{
			icon: Forklift,
			title: "Intelligente Routenführung",
			description: 
				"Unsere Algorithmen optimieren Ihre Gabelstapler-Routen in Echtzeit",
		},
		{
			icon: Users,
			title: "Menschenzentriertes Design",
			description:
				"Steigerung der Produktivität und des Arbeitskomforts der Fahrer",
		},
		{
			icon: BarChart2,
			title: "Leistungsanalyse",
			description: "Umfassende Dateneinblicke für kontinuierliche Verbesserung",
		},
	],
};

export default function Features({ language }) {
	return (
		<section className="py-20 bg-gray-800">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12 text-orange-500">
					{"Key Features"}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features[language].map((feature, index) => (
						<div
							key={index}
							className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
						>
							<feature.icon className="w-12 h-12 text-orange-500 mb-4" />
							<h3 className="text-xl font-semibold mb-2 text-white">
								{feature.title}
							</h3>
							<p className="text-gray-300">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
