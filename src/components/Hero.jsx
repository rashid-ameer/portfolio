import { Container } from ".";
import { ArrowLeft } from "../assets/icons";
import { profile2 } from "../assets/images";

const Hero = () => {
	return (
		<div className="min-h-dynamic-full bg-blue-50">
			<Container
				styleClasses={
					"grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 justify-items-center lg:justify-items-start gap-6 h-dynamic-full pt-12 lg:pt-0"
				}
			>
				{/* introduction */}
				<div className="text-center lg:text-left space-y-6 self-center">
					<h1 className="text-5xl xl:text-6xl font-bold text-blue">
						<span className="text-dark-200">
							Hello <span>👋</span>,<br /> I am
						</span>{" "}
						Rashid Ameer
					</h1>

					<p className="text-lg xl:text-xl">
						A dynamic front-end developer with over 1 years of
						experience in HTML, CSS, and JavaScript, complemented by
						proficiency in React.
					</p>

					{/* Rounded button for CTA*/}
					<button className="group flex gap-2 items-center justify-center p-5 py-2.5 mx-auto lg:mx-0 rounded-full text-white font-medium bg-blue active:bg-blue-300 hover:bg-blue-400 transition-[background]">
						Hire me
						<ArrowLeft className="rotate-180 transition-transform group-hover:translate-x-1.5" />
					</button>
				</div>

				{/* profile image */}
				<img
					src={profile2}
					className="h-full w-auto xl:w-full lg:h-auto object-cover self-end"
					alt="Rashid Ameer"
				/>
			</Container>
		</div>
	);
};

export default Hero;
