import * as icons from "../assets/icons";

const SingleSkill = ({ title }) => {
	return (
		<article className="flex flex-col items-center gap-3 ">
			<img
				className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]"
				src={icons[title.toLowerCase()]}
				alt={title}
			/>
			<h3 className="font-medium">{title}</h3>
		</article>
	);
};

export default SingleSkill;
