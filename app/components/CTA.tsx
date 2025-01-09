import Link from "next/link";
import { Button } from "@/components/ui/button";

const content = {
	en: {
		title: "Ready to Revolutionize Your Transshipment Warehouse?",
		description: "Transform your operations with our smart control systems.",
		cta: "Sign up for newsletter",
		newsletterUrl: "https://share.hsforms.com/1jvcgnOE4RLiOJSGOdSJM6gt0skb",
	},
	de: {
		title: "Bereit, Ihr Umschlagslager zu revolutionieren?",
		description:
			"Transformieren Sie Ihre Abläufe mit unseren smarten Steuerungssystemen.",
		cta: "Für Newsletter anmelden",
		newsletterUrl: "https://share.hsforms.com/1jvcgnOE4RLiOJSGOdSJM6gt0skb",
	},
};

export default function CTA({ language }) {
	const { title, description, cta, newsletterUrl } = content[language];

	return (
		<section className="py-20 bg-gradient-to-r from-orange-800 to-gray-800">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
				<p className="text-xl mb-8 text-gray-200">{description}</p>
				<Link href={newsletterUrl} passHref>
					<Button className="bg-neutral-50 text-orange-800 hover:bg-neutral-300 px-8 py-3 text-xl">
						{cta}
					</Button>
				</Link>
			</div>
		</section>
	);
}
