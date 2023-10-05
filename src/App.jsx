import { About, Footer, Hero, Projects, Section, Skill } from "./components";

function App() {
	return (
		<div className="text-dark-100 text-base xl:text-lg">
			{/* Hero container */}
			<Hero />

			{/* Abou container */}

			<Section>
				<About />
			</Section>
			{/* Skill container */}
			<Section>
				<Skill />
			</Section>

			{/* Projects container */}
			<Section>
				<Projects />
			</Section>

			<footer className="py-12 lg:py-24 bg-blue-50">
				<Footer />
			</footer>
		</div>
	);
}

export default App;
