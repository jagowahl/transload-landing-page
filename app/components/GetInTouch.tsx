import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Mail, Calendar, Newspaper } from "lucide-react";

const content = {
	en: {
		title: "Ready to Revolutionize Your Transshipment Warehouse?",
		header_title: "Connect With Us",
		description: "Transform your operations with our smart control systems.",
		cta: "Sign up for Newsletter",
		newsletterUrl: "https://share.hsforms.com/1jvcgnOE4RLiOJSGOdSJM6gt0skb",
		meeting: "Schedule a Zoom Meeting",
		meetingUrl: "https://meetings.hubspot.com/nils-boerner",
		email: "Send us an Email",
		emailUrl: "mailto:contact@trans-load.de",
		footer: "We look forward to hearing from you!",
	},
	de: {
		title: "Bereit, Ihr Umschlagslager zu revolutionieren?",
		header_title: "Kontaktieren Sie uns",
		description:
			"Transformieren Sie Ihre Abläufe mit unseren smarten Steuerungssystemen.",
		cta: "Für Newsletter anmelden",
		newsletterUrl: "https://share.hsforms.com/1jvcgnOE4RLiOJSGOdSJM6gt0skb",
		meeting: "Planen Sie ein Zoom-Meeting",
		meetingUrl: "https://meetings.hubspot.com/nils-boerner",
		email: "Senden Sie uns eine E-Mail",
		emailUrl: "mailto:contact@trans-load.de",
		footer: "Wir freuen uns, von Ihnen zu hören!",
	},
};

interface ReusableButtonProps {
	href: string;
	cta: string;
	icon: any;
}

const ReusableButton = ({ href, cta, icon }: ReusableButtonProps) => {
	return (
		<Button
			asChild
			variant="outline"
			className="w-full h-auto flex-row justify-start bg-orange-500 hover:bg-orange-600 hover:shadow-xl hover:scale-105"
		>
			<Link href={href}>
				{icon}
				<div className="w-full whitespace-normal text-xl">{cta}</div>
			</Link>
		</Button>
	);
};

export default function GetInTouch({ language }) {
	const {
		title,
		header_title,
		description,
		cta,
		newsletterUrl,
		meeting,
		meetingUrl,
		email,
		emailUrl,
		footer,
	} = content[language];

	return (
		<section className="py-20 bg-gradient-to-r from-orange-800 to-gray-800">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
				<p className="text-xl mb-8 text-gray-200">{description}</p>
				<Card className="w-full max-w-md mx-auto bg-white/10 text-white text-left">
				<CardHeader>
					<CardTitle className="text-xl">{header_title}</CardTitle>
					</CardHeader>
					<CardContent>
					<div className="space-y-4">
						<ReusableButton href={meetingUrl} cta={meeting} icon={<Calendar className="mr-2 h-5 w-5"/>}/>
						<ReusableButton href={emailUrl} cta={email}	 icon={<Mail className="mr-2 h-5 w-5"/>}/>
					</div>
					</CardContent>
					<CardFooter>{footer}
					</CardFooter>
				</Card>
			</div>
		</section>
	);
}
