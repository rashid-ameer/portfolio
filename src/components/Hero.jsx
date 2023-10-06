import { Container } from ".";
import { ArrowLeft } from "../assets/icons";
import { profile2 } from "../assets/images";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<div className="relative min-h-dynamic-full bg-blue-50">
			{/* ts particles */}
			{/* <TsParticles /> */}

			<Container
				styleClasses={
					"grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 justify-items-center lg:justify-items-start gap-6 h-dynamic-full pt-12 lg:pt-0"
				}
			>
				{/* introduction */}
				<motion.div
					initial={{ y: 100 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center lg:text-left space-y-6 self-center"
				>
					<h1
						initial={{ y: 100 }}
						animate={{ y: 0 }}
						transition={{ duration: 1 }}
						className="text-5xl xl:text-6xl font-bold text-blue"
					>
						<span className="text-dark-200">
							Hello{" "}
							<motion.span
								animate={{ rotate: 15 }}
								transition={{
									ease: "linear",
									duration: 1,
									repeat: Infinity,
									repeatType: "reverse",
									repeatDelay: 0.25,
								}}
								className="inline-block"
							>
								👋
							</motion.span>
							,<br /> I am
						</span>{" "}
						Rashid Ameer
					</h1>

					<p className="text-lg xl:text-xl">
						A dynamic front-end developer with over 1 years of
						experience in HTML, CSS, and JavaScript, complemented by
						proficiency in React.
					</p>

					{/* Rounded button for CTA*/}
					<motion.a
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{
							type: "spring",
							stiffness: 400,
							damping: 5,
						}}
						href="#social-links"
						className="group flex gap-2 items-center justify-center p-5 py-2.5 mx-auto lg:mx-0 rounded-full text-white font-medium bg-blue active:bg-blue-300 hover:bg-blue-400 transition-[background] w-fit "
					>
						Hire me
						<ArrowLeft className="rotate-180 transition-transform group-hover:translate-x-1.5" />
					</motion.a>
				</motion.div>

				{/* profile image */}
				<motion.img
					initial={{ y: 100 }}
					animate={{ y: 0 }}
					transition={{ duration: 1 }}
					src={profile2}
					className="h-full w-auto xl:w-full lg:h-auto object-cover self-end"
					alt="Rashid Ameer"
				/>
			</Container>
		</div>
	);
};

export default Hero;
