import { About, Hero, Section } from "./components";

function App() {
	return (
		<div className="text-dark-100 text-base xl:text-lg">
			{/* Hero container */}
			<Hero />

			{/* Abou container */}

			<Section>
				<About />
			</Section>
		</div>
	);
}

export default App;
