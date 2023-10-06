import { Hero, Section, About, Skill, Projects, Footer } from "./components";

// Create a separate component for the fallback content
const Fallback = () => <div>Loading...</div>;

function App() {
	return (
		<div className="text-dark-100 text-base xl:text-lg">
			{/* Hero container */}
			<Hero />

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
		</div>
	);
}

export default App;
