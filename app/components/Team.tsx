import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
	{
		name: "Nils Börner",
		role: "Co-Founder",
		image:
			"https://media.licdn.com/dms/image/v2/D4D03AQGAtgcFqi2DoQ/profile-displayphoto-shrink_800_800/B4DZN_w2gWHoAc-/0/1733015334312?e=1741219200&v=beta&t=Au4ZvgIl4ziTTTLgqakDvlhpiAirVIFPBtQOBsdTcL8",
		linkedin: "https://www.linkedin.com/in/boenils/",
	},
	{
		name: "Jago Wahl-Schwentker",
		role: "Co-Founder",
		image:
			"https://media.licdn.com/dms/image/v2/C4D03AQGGExvMiERskg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1637304606797?e=1741219200&v=beta&t=4trHtVmFqEuhtbp14GUcXN0I7ai4NqRvwga5ZokeueQ",
		linkedin: "https://www.linkedin.com/in/jagowahl/",
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
		<section className="py-20 bg-gray-900">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12 text-orange-500">
					{title}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mb-16">
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
						>
							<Image
								src={member.image}
								alt={member.name}
								width={200}
								height={200}
								className="rounded-full mx-auto mb-4"
							/>
							<h3 className="text-xl font-semibold mb-2 text-white">
								{member.name}
							</h3>
							<p className="text-gray-300 mb-4">{member.role}</p>
							<a
								href={member.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center text-orange-500 hover:text-orange-600"
							>
								<Linkedin className="w-5 h-5 mr-2" />
								LinkedIn
							</a>
						</div>
					))}
				</div>
				<div className="relative">
					<div className="relative z-10 py-12 px-6 text-center">
						<div className="text-3xl font-bold text-white mb-4">{joinUs}</div>
						<div className="text-lg text-gray-300 mb-8">{motivation}</div>
						<Button
							asChild
							className="bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300 text-lg py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
						>
							<Link
								href="mailto:contact@trans-load.de"
								className="flex items-center justify-center"
							>
								<Mail className="mr-2 h-5 w-5" />
								<span>{joinTeam}</span>
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
