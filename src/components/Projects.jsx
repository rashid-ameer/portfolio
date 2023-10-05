import { Container, SingleProject } from ".";
import Subtitle from "./Subtitle";
import { projectsData } from "../data/projectsData";

const Projects = () => {
	return (
		<Container>
			<Subtitle titleOne={"My"} titleTwo={"Projects"} />

			{/* projects card */}
			<div className="mt-12 py-2 grid justify-items-center xl:items-start gap-6 xl:grid-cols-2">
				{projectsData.map((data) => {
					return <SingleProject key={data.id} {...data} />;
				})}
			</div>
		</Container>
	);
};

export default Projects;
