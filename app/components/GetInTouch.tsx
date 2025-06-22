import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, Linkedin, Zap } from "lucide-react";

const content = {
	en: {
		title: "Ready to Upgrade Your Transshipment Warehouse?",
		description: "Get in touch with us.",
		meeting: "Schedule a Meeting",
		meetingUrl: "https://meetings.hubspot.com/nils-boerner",
		email: "Send us an Email",
		emailUrl: "mailto:contact@trans-load.de",
		linkedin: "Visit us on LinkedIn",
		linkedinUrl: "https://www.linkedin.com/company/trans-load",
		footer: "We look forward to hearing from you!",
	},
	de: {
		title: "Bereit für ein Umschlaglager-Upgrade?",
		description: "Nehmen Sie Kontakt mit uns auf.",
		meeting: "Meeting vereinbaren",
		meetingUrl: "https://meetings.hubspot.com/nils-boerner",
		email: "Senden Sie uns eine E-Mail",
		emailUrl: "mailto:contact@trans-load.de",
		linkedin: "Besuchen Sie uns auf LinkedIn",
		linkedinUrl: "https://www.linkedin.com/company/trans-load",
		footer: "Wir freuen uns, von Ihnen zu hören!",
	},
};

export default function GetInTouch({ language }: { language: "en" | "de" }) {
	const {
		title,
		description,
		meeting,
		meetingUrl,
		email,
		emailUrl,
		linkedin,
		linkedinUrl,
		footer,
	} = content[language];

	return (
		<section
			id="contact"
			className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
		>
			{/* Background decoration */}
			<div className="absolute inset-0">
				<div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-xl"></div>
				<div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/5 rounded-full blur-xl"></div>
			</div>

			<div className="container mx-auto px-4 text-center relative z-10">
				{/* Header with icon */}
				<div className="flex items-center justify-center mb-6">
					<div className="p-3 bg-orange-500/10 rounded-full border border-orange-500/20">
						<Zap className="w-8 h-8 text-orange-500" />
					</div>
				</div>

				<h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
					{title}
				</h2>
				<p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
					{description}
				</p>

				{/* Simplified contact options */}
				<div className="max-w-md mx-auto space-y-6">
					<div className="flex flex-col gap-4">
						{/* Schedule Meeting */}
						<Link href={meetingUrl} className="group">
							<div className="flex items-center justify-center p-4 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors duration-200">
								<Calendar className="w-5 h-5 mr-3 text-white" />
								<span className="text-white font-medium">{meeting}</span>
							</div>
						</Link>

						{/* Email */}
						<Link href={emailUrl} className="group">
							<div className="flex items-center justify-center p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200">
								<Mail className="w-5 h-5 mr-3 text-white" />
								<span className="text-white font-medium">{email}</span>
							</div>
						</Link>

						{/* LinkedIn */}
						<Link href={linkedinUrl} className="group">
							<div className="flex items-center justify-center p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200">
								<Linkedin className="w-5 h-5 mr-3 text-white" />
								<span className="text-white font-medium">{linkedin}</span>
							</div>
						</Link>
					</div>

					<p className="text-gray-400 text-sm mt-8">{footer}</p>
				</div>
			</div>
		</section>
	);
}
