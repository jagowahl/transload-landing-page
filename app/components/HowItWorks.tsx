"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
	Puzzle,
	Forklift,
	LayoutDashboard,
	Route,
	ChevronRight,
} from "lucide-react";

const steps = {
	en: [
		{
			title: "Seamless Integration",
			subtitle: "Quick Setup",
			description:
				"Effortlessly integrate our intelligent system into your existing warehouse infrastructure. Our plug-and-play solution adapts to your current setup without disrupting operations.",
			icon: Puzzle,
			color: "from-orange-400 to-orange-600",
		},
		{
			title: "Smart Route Optimization",
			subtitle: "AI-Powered Efficiency",
			description:
				"Advanced algorithms analyze warehouse layout, inventory patterns, and traffic flow to calculate the most efficient forklift routes, dramatically reducing empty runs and labor costs.",
			icon: Route,
			image: "./ani.gif",
			color: "from-orange-500 to-orange-700",
		},
		{
			title: "Intelligent Navigation",
			subtitle: "Turn-by-Turn Guidance",
			description:
				"Provide forklift operators with precise real-time navigation directly on existing scanners. An intuitive interface ensures optimal paths and clarity across the warehouse.",
			icon: Forklift,
			image: "./app_mock_up_eng.svg",
			color: "from-orange-600 to-orange-800",
		},
		{
			title: "Real-Time Analytics",
			subtitle: "Data-Driven Insights",
			description:
				"Monitor warehouse performance with comprehensive analytics dashboard. Track KPIs, identify bottlenecks, and make informed decisions with real-time operational data.",
			icon: LayoutDashboard,
			image: "./laptop.png",
			color: "from-gray-600 to-gray-800",
		},
	],
	de: [
		{
			title: "Nahtlose Integration",
			subtitle: "Schnelle Einrichtung",
			description:
				"Integrieren Sie unser intelligentes System mühelos in Ihre bestehende Lagerinfrastruktur. Unsere Plug-and-Play-Lösung passt sich an Ihr aktuelles Setup an, ohne den Betrieb zu stören.",
			icon: Puzzle,
			color: "from-orange-400 to-orange-600",
		},
		{
			title: "Intelligente Routenoptimierung",
			subtitle: "KI-gesteuerte Effizienz",
			description:
				"Fortschrittliche Algorithmen analysieren Lagerlayout, Bestandsmuster und Verkehrsfluss, um die effizientesten Gabelstaplerrouten zu berechnen und Leerfahrten und damit Personalkosten drastisch zu reduzieren.",
			icon: Route,
			image: "./ani.gif",
			color: "from-orange-500 to-orange-700",
		},
		{
			title: "Intelligente Navigation",
			subtitle: "Schritt-für-Schritt-Führung",
			description:
				"Bieten Sie Gabelstaplerfahrern präzise Echtzeit-Navigation direkt auf den vorhandenen Scannern. Ein intuitive Oberfläche sorgen für optimale Wege und Klarheit auf dem Lager.",
			icon: Forklift,
			image: "./scanner.png",
			color: "from-orange-600 to-orange-800",
		},
		{
			title: "Echtzeit-Analytics",
			subtitle: "Datenbasierte Einblicke",
			description:
				"Überblicken Sie die Lagerleistung mit einem umfassenden Analytics-Dashboard. Verfolgen Sie KPIs, identifizieren Sie Engpässe und treffen Sie fundierte Entscheidungen mit Echtzeit-Betriebsdaten.",
			icon: LayoutDashboard,
			image: "./laptop.png",
			color: "from-gray-600 to-gray-800",
		},
	],
};

// Types
interface Step {
	title: string;
	subtitle: string;
	description: string;
	icon: React.ComponentType<any>;
	color: string;
	image?: string;
}

interface StepComponentProps {
	step: Step;
	index: number;
	totalSteps: number;
	language: string;
	isActive: boolean;
	onHover: (index: number | null) => void;
}

interface HowItWorksProps {
	language: "en" | "de";
}

const StepComponent = ({
	step,
	index,
	totalSteps,
	language,
	isActive,
	onHover,
}: StepComponentProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [imageLoaded, setImageLoaded] = useState(false);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
			animate={
				isInView
					? { opacity: 1, x: 0 }
					: { opacity: 0, x: index % 2 === 0 ? -100 : 100 }
			}
			transition={{
				duration: 0.7,
				delay: index * 0.2,
				type: "spring",
				stiffness: 100,
			}}
			className={`group relative mb-16 last:mb-0 cursor-pointer`}
			onMouseEnter={() => onHover(index)}
			onMouseLeave={() => onHover(null)}
			role="article"
			aria-label={`Step ${index + 1}: ${step.title}`}
		>
			{/* Main Content */}
			<div
				className={`flex flex-col lg:flex-row items-start gap-8 ${
					index % 2 === 1 ? "lg:flex-row-reverse" : ""
				}`}
			>
				{/* Step Indicator */}
				<div className="flex-shrink-0 relative">
					<motion.div
						className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white z-20 relative
				bg-gradient-to-r ${step.color} shadow-lg transform transition-all duration-300
				${isActive ? "scale-110 shadow-xl" : "group-hover:scale-105"}
			  `}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<motion.div
							key="number"
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0 }}
							transition={{ duration: 0.3 }}
						>
							{index + 1}
						</motion.div>
					</motion.div>

					{/* Glow Effect */}
					<motion.div
						className={`absolute inset-0 rounded-full bg-gradient-to-r ${
							step.color
						} opacity-20 blur-lg -z-10
				${isActive ? "scale-150" : "scale-100"}
			  `}
						animate={{ scale: isActive ? 1.5 : 1 }}
						transition={{ duration: 0.3 }}
					/>
				</div>

				{/* Content Card */}
				<div className="flex-grow max-w-2xl">
					<motion.div
						className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 lg:p-8 rounded-2xl shadow-2xl border border-gray-700
				transform transition-all duration-300 ${
					isActive
						? "border-orange-500/50 shadow-orange-500/20"
						: "group-hover:border-gray-600"
				}
			  `}
						whileHover={{ y: -5 }}
					>
						{/* Header */}
						<div className="flex items-start justify-between mb-6">
							<div className="flex items-center gap-4">
								<motion.div
									className={`p-3 rounded-xl bg-gradient-to-r ${step.color} shadow-lg`}
									whileHover={{ rotate: 5 }}
								>
									<step.icon className="w-6 h-6 text-white" />
								</motion.div>
								<div>
									<h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
										{step.title}
									</h3>
									<p className="text-sm text-orange-400 font-medium">
										{step.subtitle}
									</p>
								</div>
							</div>
							<motion.div
								className="text-orange-500 opacity-70"
								whileHover={{ x: 5 }}
							>
								<ChevronRight className="w-5 h-5" />
							</motion.div>
						</div>

						{/* Description */}
						<p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6">
							{step.description}
						</p>

						{/* Image */}
						{step.image && (
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={
									isInView
										? { opacity: 1, scale: 1 }
										: { opacity: 0, scale: 0.8 }
								}
								transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
								className={`relative overflow-hidden rounded-xl bg-gray-700/50 ${
									index === 2 ? "" : "p-4"
								}`}
							>
								<div className="relative">
									<Image
										src={step.image}
										alt={step.title}
										width={400}
										height={300}
										className={`transition-all duration-500 ${
											imageLoaded ? "opacity-100" : "opacity-0"
										} ${
											index === 1
												? "max-w-[250px] mx-auto rounded-lg w-full h-auto"
												: index === 2
												? "w-full h-full object-cover rounded-xl"
												: "rounded-lg w-full h-auto"
										}`}
										onLoad={() => setImageLoaded(true)}
									/>
									{!imageLoaded && (
										<div className="absolute inset-0 bg-gray-700 animate-pulse rounded-lg" />
									)}
								</div>
							</motion.div>
						)}
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default function HowItWorks({ language = "en" }: HowItWorksProps) {
	const containerRef = useRef(null);
	const [activeStep, setActiveStep] = useState<number | null>(null);
	const [completedSteps, setCompletedSteps] = useState<number[]>([]);
	const isInView = useInView(containerRef, { once: true, margin: "-200px" });

	const currentSteps = steps[language] || steps.en;
	const totalSteps = currentSteps.length;

	// Simulate step completion for demo
	React.useEffect(() => {
		if (isInView) {
			const timer = setInterval(() => {
				setCompletedSteps((prev) => {
					if (prev.length < totalSteps) {
						return [...prev, prev.length];
					}
					return prev;
				});
			}, 1000);
			return () => clearInterval(timer);
		}
	}, [isInView, totalSteps]);

	return (
		<section
			id="how-it-works"
			className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden relative"
			ref={containerRef}
			aria-labelledby="how-it-works-title"
		>
			{/* Background Effects */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
					transition={{ duration: 0.7 }}
					className="text-center mb-16 lg:mb-24"
				>
					<motion.div
						initial={{ scale: 0 }}
						animate={isInView ? { scale: 1 } : { scale: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6"
					>
						<div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
						{language === "en" ? "Process Overview" : "Prozessübersicht"}
					</motion.div>

					<h2
						id="how-it-works-title"
						className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
					>
						{language === "en" ? "How It Works" : "So funktioniert's"}
					</h2>

					<p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
						{language === "en"
							? "Discover how our intelligent system transforms your warehouse operations through four seamless steps, delivering unprecedented efficiency and insights."
							: "Entdecken Sie, wie unser intelligentes System Ihre Lagerabläufe in vier nahtlosen Schritten transformiert und dabei beispiellose Effizienz und Einblicke liefert."}
					</p>
				</motion.div>

				{/* Progress Bar */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="flex justify-center mb-16"
				>
					<div className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
						{currentSteps.map((_, index) => (
							<React.Fragment key={index}>
								<motion.div
									className={`w-3 h-3 rounded-full transition-all duration-300 ${
										completedSteps.includes(index)
											? "bg-orange-500 shadow-lg shadow-orange-500/50"
											: activeStep === index
											? "bg-orange-400 shadow-lg shadow-orange-400/50"
											: "bg-gray-600"
									}`}
									animate={{ scale: activeStep === index ? 1.2 : 1 }}
								/>
								{index < totalSteps - 1 && (
									<div
										className={`w-8 h-0.5 transition-all duration-500 ${
											completedSteps.includes(index)
												? "bg-orange-500"
												: "bg-gray-600"
										}`}
									/>
								)}
							</React.Fragment>
						))}
					</div>
				</motion.div>

				{/* Steps */}
				<div className="max-w-6xl mx-auto">
					{currentSteps.map((step, index) => (
						<StepComponent
							key={index}
							step={step}
							index={index}
							totalSteps={totalSteps}
							language={language}
							isActive={completedSteps.includes(index)}
							onHover={setActiveStep}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
