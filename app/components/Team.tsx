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
		joinTeam: "Unserem Team beitreten",
	},
};

export default function Team({ language }: { language: "en" | "de" }) {
	const { title, joinUs, motivation, joinTeam } = content[language];

	return (
		<section id="team" className="py-20 bg-gray-900 relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0">
				<div className="absolute top-10 right-20 w-24 h-24 bg-orange-500/5 rounded-full blur-xl"></div>
				<div className="absolute bottom-32 left-16 w-32 h-32 bg-orange-500/5 rounded-full blur-xl"></div>
			</div>

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

				{/* Join Our Team CTA */}
				<div className="max-w-4xl mx-auto">
					<div className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
						{/* Background decoration */}
						<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
						<div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/5 rounded-full blur-xl"></div>

						<div className="relative z-10">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-400/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-medium mb-6">
								<Users className="w-4 h-4 mr-2" />
								Join Our Mission
							</div>

							<h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
								{joinUs}
							</h3>
							<p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
								{motivation}
							</p>
							<Link href="mailto:contact@trans-load.de" className="group">
								<div className="flex items-center justify-center p-4 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors duration-200 max-w-md mx-auto">
									<Mail className="w-5 h-5 mr-3 text-white" />
									<span className="text-white font-medium">{joinTeam}</span>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
