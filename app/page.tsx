"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";
import GetInTouch from "./components/GetInTouch";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function Home() {
	const [language, setLanguage] = useState<"de" | "en">("de");

	useEffect(() => {
		document.documentElement.classList.add("dark");
	}, []);

	return (
		<div className="min-h-screen bg-gray-900 text-white">
			<Header language={language} setLanguage={setLanguage} />
			<main>
				<Hero language={language} />
				<Partners />
				<Team language={language} />
				<GetInTouch />
				<Footer language={language} />
			</main>
		</div>
	);
}
