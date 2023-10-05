import { useEffect, useRef } from "react";
import { SingleProjectHeader, SingleProjectInfo, SingleProjectSwiper } from ".";
import { register } from "swiper/element/bundle";
import "../../node_modules/swiper/swiper-bundle.min.css";

const SingleProject = (props) => {
	const { name, description, images, githubLink, liveLink } = props;
	const swiperRef = useRef(null);

	// use effect for swiper and slide function
	useEffect(() => {
		// register swiper
		register();

		// change slide after 3s
		const swiperInterval = setInterval(() => {
			if (swiperRef.current) {
				swiperRef.current.swiper.slideNext();
			}
		}, 3000);

		return () => clearInterval(swiperInterval);
	}, []);

	return (
		<article className="p-4 w-full max-w-2xl bg-blue-50 rounded-lg overflow-hidden">
			{/* header */}
			<SingleProjectHeader swiperRef={swiperRef} name={name} />

			{/* swiper */}
			<SingleProjectSwiper swiperRef={swiperRef} images={images} />

			{/* project information */}
			<SingleProjectInfo
				description={description}
				githubLink={githubLink}
				liveLink={liveLink}
			/>
		</article>
	);
};

export default SingleProject;
