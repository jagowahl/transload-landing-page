import Image from "next/image";
import Link from "next/link";

export default function Partners({ language }) {
	return (
		<section className="py-20 bg-gray-800">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12 text-orange-500">
					{language === "en" ? "Our Partners" : "Unsere Partner"}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
					<div className="bg-gray-700 p-8 rounded-lg shadow-lg text-center">
						<Link href={"https://www.wahl.co/"}>
							<Image
								src="./wahl_co_logo.png"
								alt="Wahl & Co"
								width={200}
								height={100}
								className="mx-auto mb-4"
							/>
						</Link>
						<p className="text-white text-lg">Wahl & Co</p>
					</div>
					<div className="bg-gray-700 p-8 rounded-lg shadow-lg text-center">
						<Link href={"https://masterclass.tum.de/"}>
							<Image
								src="./tum_logo.svg"
								alt="TUM Entrepreneurial Masterclass"
								width={100}
								height={100}
								className="mx-auto mb-4"
							/>
						</Link>
						<p className="text-white text-lg">
							TUM Entrepreneurial Masterclass
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
