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
		{ href: "#features", label: language === "en" ? "Key Features" : "Key-Features" },
		{
			href: "#how-it-works",
			label: language === "en" ? "How it Works" : "So funktioniert's",
		},
		{ href: "#contact", label: language === "en" ? "Contact" : "Kontakt" },
		{ href: "#team", label: language === "en" ? "Team" : "Team" },
		{ href: "#partners", label: language === "en" ? "Partners" : "Partner" },
	];

	return (
		<header className="sticky top-0 bg-gray-800/70 backdrop-blur-sm border-b border-gray-700 z-50 shadow-lg">
			<nav
				className="container mx-auto px-4 py-4"
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
							className="h-8 w-auto"
							priority
						/>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navigationItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm"
							>
								{item.label}
							</Link>
						))}
					</div>

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
							className="bg-orange-500 text-white hover:bg-orange-600 transition-colors px-3 py-2 text-xs font-medium"
						>
							<Globe className="w-4 h-4 mr-1" />
							{language === "en" ? "DE" : "EN"}
						</Button>

						{/* Mobile Menu Toggle */}
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label="Toggle mobile menu"
							className="md:hidden text-gray-300 hover:text-white"
						>
							{isMenuOpen ? (
								<X className="w-5 h-5" />
							) : (
								<Menu className="w-5 h-5" />
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden mt-4 py-4 border-t border-gray-700 animate-in slide-in-from-top-2">
						<div className="flex flex-col space-y-3">
							{navigationItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									onClick={() => setIsMenuOpen(false)}
									className="text-gray-300 hover:text-orange-500 transition-colors font-medium py-2 px-2"
								>
									{item.label}
								</Link>
							))}
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
