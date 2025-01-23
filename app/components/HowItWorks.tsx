"use client";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { motion } from "framer-motion";



const steps = {
	en: [
		{
			title: "Integration",
			description:
				"Seamless integration of our system into your existing warehouse infrastructure.",
		},
		{
			title: "Data Collection",
			description:
				"Real-time data collection of warehouse operations, such as the check-in of new pallets in the transshipment warehouse.",
		},
		{
			title: "Route Optimization",
			description:
				"We use state-of-the-art optimization tools to calculate the most efficient routes in real-time.",
		},
		{
			title: "Forklift Navigation",
			description:
				"Our system individually navigates each driver through the warehouse with specific driving orders. See mockup below.",
		},
		{
			title: "Continuous Improvement",
			description:
				"The system learns and adapts, constantly improving efficiency over time.",
		},
	],
	de: [
		{
			title: "Integration",
			description:
				"Nahtlose Integration unseres Systems in Ihre bestehende Lagerinfrastruktur.",
		},
		{
			title: "Datenerfassung",
			description:
				"Erfassung von Echtzeitdaten über Lageroperationen wie das Einchecken von neuen Paletten auf dem Umschlaglager.",
		},
		{
			title: "Routenoptimierung",
			description:
				"Wir setzen modernste Optimierungstools ein, um die effizientesten Fahrwege in Echtzeit zu berechnen.",
		},
		{
			title: "Navigation der Gabelstapler",
			description:
				"Unser System navigiert jeden Fahrer individuell in Form von Fahraufträgen über das Lager. Siehe Mockup unten.",
		},
		{
			title: "Kontinuierliche Verbesserung",
			description:
				"Das System lernt und passt sich an, wodurch die Effizienz im Laufe der Zeit ständig verbessert wird.",
		},
	],
};

const content = {
	en: {
		title: "App Mockup",
		description: "A simple interface for forklift drivers",
		src: "./app_mock_up_eng.svg"
	},
	de: {
		title: "App Mockup",
		description: "Eine einfache Benutzeroberfläche für Gabelstaplerfahrer",
		src: "./app_mock_up_de.svg"
	}
}

export default function HowItWorks({ language }) {
	return (
		<section className="py-20 bg-gray-900">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12 text-orange-500">
					{language === "en" ? "How It Works" : "So funktioniert's"}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<img src="./ani.gif" alt="animation" />
					<div>
						{steps[language].map((step, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="mb-6"
							>
								<h3 className="text-xl font-semibold mb-2 text-white">
									{index + 1}. {step.title}
								</h3>
								<p className="text-gray-300">{step.description}</p>
							</motion.div>
						))}
					</div>
				</div>
				<br />
				<Card className="container bg-gray-800">
					<CardHeader>
						<CardTitle>{content[language].title}</CardTitle>
						<CardDescription>{content[language].description}</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="w-full overflow-x-auto items-center">
							<div className="relative h-[calc(45vh)] min-w-[100vw] items-start" style={{ aspectRatio: "3 / 1" }}>
								<Image src={content[language].src} alt="App Mockup" fill style={{ objectFit: "fill" }} />
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
