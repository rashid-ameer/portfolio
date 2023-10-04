import { About, Hero, Section, Skill } from "./components";

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
		</div>
	);
}

export default App;
