import { About, Hero, Projects, Section, Skill } from "./components";

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
		</div>
	);
}

export default App;
