import * as icons from "../assets/icons";
import { motion } from "framer-motion";
import useMotion from "../hooks/Motion";

const SingleSkill = ({ title }) => {
	const { swipe, controls, motionRef } = useMotion();

	return (
		<motion.article
			initial={{ y: "100%" }}
			animate={controls}
			transition={{ duration: 0.5 }}
			ref={motionRef}
			variants={swipe("y", "100%")}
			className="flex flex-col items-center gap-3 "
		>
			<img
				className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]"
				src={icons[title.toLowerCase()]}
				alt={title}
			/>
			<h3 className="font-medium">{title}</h3>
		</motion.article>
	);
};

export default SingleSkill;
