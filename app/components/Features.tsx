"use client";
import { motion } from "framer-motion";
import {
	Forklift,
	BarChart2,
	Users,
	Zap,
	Clock,
	Target,
	ArrowRight,
} from "lucide-react";

const content = {
	en: {
		title: "Key Features",
		subtitle: "Powerful tools designed to transform your warehouse operations",
	},
	de: {
		title: "Key-Features",
		subtitle: "Leistungsstarke Tools zur Transformation Ihrer Lagerabläufe",
	},
};

const features = {
	en: [
		{
			icon: Forklift,
			title: "Smart Routing",
			description:
				"Our AI-powered algorithms optimize forklift routes in real-time, reducing travel time by up to 30%",
			highlight: "30% faster",
		},
		{
			icon: Users,
			title: "Human-Centric Design",
			description:
				"Intuitive interface designed with drivers in mind, boosting productivity and work satisfaction",
			highlight: "Driver-friendly",
		},
		{
			icon: BarChart2,
			title: "Performance Analytics",
			description:
				"Comprehensive real-time insights and predictive analytics for continuous operational improvement",
			highlight: "Real-time data",
		},
	],
	de: [
		{
			icon: Forklift,
			title: "Intelligente Routenführung",
			description:
				"KI-gestützte Algorithmen optimieren Gabelstapler-Routen in Echtzeit und reduzieren Fahrzeit um bis zu 30%",
			highlight: "30% schneller",
		},
		{
			icon: Users,
			title: "Menschenzentriertes Design",
			description:
				"Intuitive Benutzeroberfläche für Fahrer entwickelt, steigert Produktivität und Arbeitszufriedenheit",
			highlight: "Fahrerfreundlich",
		},
		{
			icon: BarChart2,
			title: "Leistungsanalyse",
			description:
				"Umfassende Echtzeit-Einblicke und prädiktive Analysen für kontinuierliche Betriebsverbesserung",
			highlight: "Live-Daten",
		},
	],
};

export default function Features({ language }: { language: "en" | "de" }) {
	const { title, subtitle } = content[language];

	return (
		<section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0">
				<div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
							{title}
						</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
				</motion.div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features[language].map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ y: -5, scale: 1.02 }}
							className="group relative"
						>
							{/* Card */}
							<div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl h-full hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden">
								{/* Gradient Background */}
								<div
									className={`absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
								></div>

								{/* Content */}
								<div className="relative z-10">
									{/* Icon with Gradient Background */}
									<div
										className={`w-16 h-16 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}
									>
										<div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
											<feature.icon className="w-8 h-8 text-white" />
										</div>
									</div>

									{/* Highlight Badge */}
									<div
										className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 bg-gradient-to-r from-orange-400 to-red-500 text-white`}
									>
										{feature.highlight}
									</div>

									{/* Title */}
									<h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-600 transition-all duration-300">
										{feature.title}
									</h3>

									{/* Description */}
									<p className="text-gray-300 leading-relaxed mb-4">
										{feature.description}
									</p>
								</div>

								{/* Shine Effect */}
								<div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
									<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
