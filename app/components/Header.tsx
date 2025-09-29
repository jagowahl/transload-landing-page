import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
	language: "en" | "de";
	setLanguage: (language: "en" | "de") => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleLanguage = () => setLanguage(language === "en" ? "de" : "en");

	const navigationItems = [
		{
			href: "#features",
			label: language === "en" ? "Key Features" : "Key-Features",
		},
		{
			href: "#how-it-works",
			label: language === "en" ? "How it Works" : "So funktioniert's",
		},
		{ href: "#contact", label: language === "en" ? "Contact" : "Kontakt" },
		{ href: "#team", label: language === "en" ? "Team" : "Team" },
		{ href: "#partners", label: language === "en" ? "Partners" : "Partner" },
	];

	return (
		<header className="sticky top-0 backdrop-blur-sm border-b border-gray-700 z-50 shadow-lg">
			<nav
				className="container mx-auto px-2 py-4"
				role="navigation"
				aria-label="Main navigation"
			>
				<div className="flex justify-between items-center">
					{/* Logo */}
					<Link
						href="/"
						className="flex items-center hover:opacity-80 transition-opacity"
					>
						<Image
							src="./our_logo.svg"
							alt="Transload Logo"
							width={180}
							height={180}
							className="h-12 w-auto"
							priority
						/>
					</Link>

					{/* Actions */}
					<div className="flex items-center space-x-3">
						{/* Language Toggle */}
						<Button
							variant="ghost"
							size="sm"
							onClick={toggleLanguage}
							aria-label={`Switch to ${
								language === "en" ? "German" : "English"
							}`}
							className="bg-orange-500 hover:bg-orange-600 rounded-full transition-colors px-3 py-2 text-xs font-medium backdrop-blur-md border bg-orange-400/10 border-orange-500/20 hover:text-orange-500 hover:border-orange-500 text-orange-500 hover:bg-orange-400/20"
						>
							<Globe className="w-4 h-4 mr-1" />
							{language === "en" ? "DE" : "EN"}
						</Button>
					</div>
				</div>
			</nav>
		</header>
	);
}
