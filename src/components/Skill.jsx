import { Container, SingleSkill } from ".";
import Subtitle from "./Subtitle";
import { skillsData } from "../data/skillsData";

const Skill = () => {
	return (
		<Container>
			<Subtitle titleOne={"My"} titleTwo={"Skills"} />
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-between gap-10 mt-12 py-2">
				{skillsData.map((data) => {
					return <SingleSkill key={data.id} title={data.title} />;
				})}
			</div>
		</Container>
	);
};

export default Skill;
