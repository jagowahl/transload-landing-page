import Image from "next/image";
import Link from "next/link";
import { Handshake, ExternalLink } from "lucide-react";

export default function Partners({ language }: { language: "en" | "de" }) {
	return (
		<section className="py-20 bg-gray-800 relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0">
				<div className="absolute top-16 left-20 w-28 h-28 bg-orange-500/5 rounded-full blur-xl"></div>
				<div className="absolute bottom-20 right-16 w-36 h-36 bg-orange-500/5 rounded-full blur-xl"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
						<Handshake className="w-4 h-4 mr-2" />
						Partnerships
					</div>
					<h2 className="text-4xl font-bold text-white mb-4">
						{language === "en"
							? "Our Trusted Partners"
							: "Unsere vertrauenswürdigen Partner"}
					</h2>
					<p className="text-lg text-gray-300 max-w-2xl mx-auto">
						{language === "en"
							? "We collaborate with industry leaders to deliver exceptional solutions and drive innovation in warehouse technology."
							: "Wir arbeiten mit Branchenführern zusammen, um außergewöhnliche Lösungen zu liefern und Innovationen in der Lagertechnologie voranzutreiben."}
					</p>
				</div>

				{/* Partners Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{/* Wahl & Co Partner Card */}
					<div className="group bg-gray-700 border border-gray-600 hover:border-orange-500/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
						<Link href="https://www.wahl.co/" className="block">
							<div className="relative mb-6">
								<div className="absolute inset-0 bg-orange-500/10 rounded-lg opacity-0 transition-opacity duration-300"></div>
								<div className="relative bg-white rounded-lg p-6 mx-auto w-fit">
									<Image
										src="./wahl_co_logo.png"
										alt="Wahl & Co"
										width={200}
										height={100}
										className="mx-auto"
									/>
								</div>
							</div>

							<h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
								Wahl & Co
							</h3>

							<div className="inline-flex items-center text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors">
								<span>Visit Website</span>
								<ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
							</div>
						</Link>
					</div>

					{/* TUM Partner Card */}
					<div className="group bg-gray-700 border border-gray-600 hover:border-orange-500/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
						<Link href="https://masterclass.tum.de/" className="block">
							<div className="relative mb-6">
								<div className="absolute inset-0 bg-orange-500/10 rounded-lg opacity-0 transition-opacity duration-300"></div>
								<div className="relative bg-white rounded-lg p-6 mx-auto w-fit">
									<Image
										src="./tum_logo.svg"
										alt="TUM Entrepreneurial Masterclass"
										width={120}
										height={120}
										className="mx-auto"
									/>
								</div>
							</div>

							<h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors leading-tight">
								TUM Entrepreneurial Masterclass
							</h3>

							<div className="inline-flex items-center text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors">
								<span>Learn More</span>
								<ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
