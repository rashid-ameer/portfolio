import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useMotion = () => {
	const controls = useAnimation();
	const [motionRef, inView] = useInView();

	const swipe = (type, value) => {
		return {
			visible: {
				opacity: 1,
				[type]: 0,
			},
			hidden: {
				opacity: 0,
				[type]: value,
			},
		};
	};

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);
	return { swipe, motionRef, controls };
};

export default useMotion;
