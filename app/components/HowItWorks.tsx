"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView} from "framer-motion"
import { Puzzle, Forklift, LayoutDashboard, Route} from "lucide-react"

const steps = {
	en: [
	  {
		title: "Integration",
		description: "Easily integrate our system into your existing warehouse infrastructure for seamless operations.",
		icon: Puzzle,
	  },
	  {
		title: "Route Optimization",
		description: "Our smart algorithms calculate the most efficient forklift routes, minimizing empty runs and improving efficiency.",
		icon: Route,
		image: "./ani.gif",
	  },
	  {
		title: "Forklift Navigation",
		description: "Provide forklift drivers with precise, turn-by-turn navigation to streamline movement within the warehouse.",
		icon: Forklift,
		image: "./app_mock_up_eng.svg",
	  },
	  {
		title: "Real-Time Analysis",
		description: "Gain in-depth insights into warehouse dynamics with our real-time analytics dashboard. Analyse KPIs, and stay informed with live data.",
		icon: LayoutDashboard,
		image: "./screen_2.png",
	  },
	],
	de: [
	  {
		title: "Integration",
		description: "Integrieren Sie unser System mühelos in Ihre bestehende Lagerinfrastruktur für einen reibungslosen Betrieb.",
		icon: Puzzle,
	  },
	  {
		title: "Routenoptimierung",
		description: "Unsere intelligenten Algorithmen berechnen die effizientesten Gabelstaplerrouten, reduzieren Leerfahrten und steigern die Effizienz.",
		icon: Route,
		image: "./ani.gif",
	  },
	  {
		title: "Gabelstapler-Navigation",
		description: "Bieten Sie Gabelstaplerfahrern eine präzise, schrittweise Navigation, um ihre Wege im Lager zu optimieren.",
		icon: Forklift,
		image: "./scanner.png",
	  },
	  {
		title: "Echtzeit-Analyse",
		description: "Erhalten Sie tiefgehende Einblicke in die Lagerdynamik mit unserem Echtzeit-Analyse-Dashboard. Analysieren Sie KPIs und bleiben Sie mit Live-Daten stets informiert.",
		icon: LayoutDashboard,
		image: "./laptop.png",
	  },
	],
  };
  

const StepComponent = ({ step, index, totalSteps, language }) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-100px" })
  
	return (
	  <motion.div
		ref={ref}
		initial={{ opacity: 0, y: 50 }}
		animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
		transition={{ duration: 0.5, delay: index * 0.2 }}
		className="flex flex-col sm:flex-row items-start mb-12 last:mb-0"
	  >
		<div className="flex-shrink-0 mr-4 mb-4 sm:mb-0">
		  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-xl font-bold text-white">
			{index + 1}
		  </div>
		</div>
		<div className="flex-grow w-full sm:w-auto">
		  <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
			<div className="flex items-center mb-4">
			  <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mr-3" />
			  <h3 className="text-xl sm:text-xl font-bold text-white">{step.title}</h3>
			</div>
			<p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">{step.description}</p>
			{step.image && (
			  <div className="mt-4">
				<Image
				  src={step.image}
				  alt={step.title}
				  width={300}
				  height={200}
				  className={`rounded-lg w-80 h-auto ${index === 1 ? "max-w-[200px]" : ""} ${
					index === 3 ? "" : ""
				  }`}
				/>
			  </div>
			)}
		  </div>
		</div>
		<div className="hidden sm:flex flex-shrink-0 ml-4 w-12 justify-center">
		<div className="w-1 h-full bg-orange-500 my-4"></div>
		</div>
	  </motion.div>
	)
  }
  
  export default function HowItWorks({ language = "en" }) {
	const containerRef = useRef(null)
	const totalSteps = steps[language].length
	const lineHeight = `calc(100% - ${totalSteps * 92}px)`
  
	return (
	  <section
		className="py-16 sm:py-24 bg-gray-900  text-white overflow-hidden"
		ref={containerRef}
	  >
		<div className="container mx-auto px-4 sm:px-6 lg:px-8">
		  <motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="text-center mb-12 sm:mb-16"
		  >
			<h2 className="text-3xl sm:text-3xl font-bold mb-4 text-orange-500">
			  {language === "en" ? "How It Works" : "So funktioniert's"}
			</h2>
			<p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
			  {language === "en"
				? "Discover how our smart system optimizes your transshipment warehouse operations"
				: "Entdecken Sie, wie unser smartes System Ihre Abläufe im Umschlaglager optimiert"}
			</p>
		  </motion.div>
		  <div className="relative max-w-3xl mx-auto">
			<div
			  className="absolute left-6 top-6 w-1 bg-orange-500 hidden sm:block"
			  style={{
				height: lineHeight,
			  }}
			/>
			<div className="relative z-10">
			  {steps[language].map((step, index) => (
				<StepComponent
				  key={index}
				  step={step}
				  index={index}
				  totalSteps={steps[language].length}
				  language={language}
				/>
			  ))}
			</div>
		  </div>
		  <motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 1 }}
			className="flex justify-center mt-12 sm:mt-16"
		  >
		  </motion.div>
		</div>
	  </section>
	)
  }
  