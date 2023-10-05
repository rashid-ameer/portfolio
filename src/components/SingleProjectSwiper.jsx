import React from "react";

const SingleProjectSwiper = ({ swiperRef, images }) => {
	return (
		<swiper-container
			slides-per-view="1"
			lazy="true"
			grab-cursor={true}
			navigation={false}
			speed={700}
			loop="true"
			ref={swiperRef}
		>
			{images.map(({ id, image }) => {
				// {/* slider */}
				return (
					<swiper-slide key={id}>
						<img className="w-full" src={image} alt="" />
					</swiper-slide>
				);
			})}
		</swiper-container>
	);
};

export default SingleProjectSwiper;
