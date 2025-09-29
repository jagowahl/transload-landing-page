import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
	{
		name: "Nils Börner",
		role: "Co-Founder",
		image: "./nils.jpg",
		linkedin: "https://www.linkedin.com/in/boenils/",
		email: "mailto:nils.boerner@trans-load.de",
	},
	{
		name: "Jago Wahl-Schwentker",
		role: "Co-Founder",
		image: "./jago.jpg",
		linkedin: "https://www.linkedin.com/in/jagowahl/",
		email: "mailto:jago.wahl-schwentker@trans-load.de",
	},
];

const content = {
	en: {
		title: "Our Team",
		joinUs: "Want to be part of our team?",
		motivation:
			"We are always looking for talented and motivated people to enrich our team.",
		joinTeam: "Join Our Team",
	},
	de: {
		title: "Unser Team",
		joinUs: "Möchtest du Teil unseres Teams werden?",
		motivation:
			"Wir suchen immer nach talentierten und motivierten Leuten, die unser Team bereichern.",
		joinTeam: "Join Our Team",
	},
};

export default function Team({ language }: { language: "en" | "de" }) {
	const { title, joinUs, motivation, joinTeam } = content[language];

	return (
		<section id="team" className="py-20 bg-gray-900 relative overflow-hidden">

			<div className="container mx-auto px-4 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-400/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-medium mb-6">
						<Users className="w-4 h-4 mr-2" />
						Meet the Team
					</div>
					<h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
				</div>

				{/* Team Members Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mb-20">
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className="group bg-gray-800 border border-gray-700  p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center max-w-sm w-full"
						>
							{/* Profile Image with hover effect */}
							<div className="relative mb-6">
								<div className="absolute inset-0 bg-orange-500/20 rounded-full blur-lg opacity-0 transition-opacity duration-300"></div>
								<Image
									src={member.image}
									alt={member.name}
									width={160}
									height={160}
									className="relative rounded-full mx-auto border-4 border-gray-700  transition-colors duration-300"
								/>
							</div>

							{/* Member Info */}
							<h3 className="text-2xl font-bold mb-2 text-white transition-colors">
								{member.name}
							</h3>
							<div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
								{member.role}
							</div>

							{/* Social Links */}
							<div className="flex justify-center space-x-4">
								<a
									href={member.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className="group/link flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-orange-500 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
								>
									<Linkedin className="w-4 h-4 mr-2 text-blue-400" />
									<span className="text-sm">LinkedIn</span>
									<ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
								</a>
								<a
									href={member.email}
									target="_blank"
									rel="noopener noreferrer"
									className="group/link flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-orange-500 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
								>
									<Mail className="w-4 h-4 mr-2 text-orange-400" />
									<span className="text-sm">Email</span>
									<ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
