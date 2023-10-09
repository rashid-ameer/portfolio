import React, { Suspense, lazy } from "react";
import { Hero, Section } from "./components";

const About = lazy(() => import("./components/About"));
const Skill = lazy(() => import("./components/Skill"));
const Projects = lazy(() => import("./components/Projects"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
	return (
		<div className="text-dark-100 text-base xl:text-lg">
			{/* Hero container */}
			<Hero />

			{/* Lazy-loaded components */}
			<Suspense fallback={<div>Loading...</div>}>
				<Section>
					<About />
				</Section>

				<Section>
					<Skill />
				</Section>

				<Section>
					<Projects />
				</Section>

				<footer className="py-12 lg:py-24 bg-blue-50">
					<Footer />
				</footer>
			</Suspense>
		</div>
	);
}

export default App;
