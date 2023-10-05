import { ArrowLeft } from "../assets/icons";

const SingleProjectHeader = ({ swiperRef, name }) => {
	// go to next slide functionality
	const goNext = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slideNext();
		}
	};

	// go to previous slide functionality
	const goPrev = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slidePrev();
		}
	};
	return (
		<header className="py-4 flex justify-between items-center">
			<button
				className="group/swiper-btn bg-blue-50 hover:bg-blue-100 transition-[background] p-2 rounded-full"
				onClick={goPrev}
			>
				<ArrowLeft className="group-hover/swiper-btn:fill-blue transition-[fill]" />
			</button>
			<h3 className="text-blue font-semibold">{name}</h3>
			<button
				className=" group/swiper-btn bg-blue-50 hover:bg-blue-100 transition-[background] p-2 rounded-full"
				onClick={goNext}
			>
				<ArrowLeft className="group-hover/swiper-btn:fill-blue rotate-180 transition-[fill]" />
			</button>
		</header>
	);
};

export default SingleProjectHeader;
