import { profile1 } from "../assets/images";
import { AboutDetail, Container, Subtitle } from "./";

const About = () => {
	return (
		<Container>
			{/* title */}
			<Subtitle titleOne={"About"} titleTwo={"me"} />
			{/* other content */}

			<div className="py-2 grid grid-rows-2 justify-center lg:justify-start lg:grid-rows-none lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 mt-12">
				{/* image container */}

				<div className="self-center lg:relative lg:z-[1] lg:before:absolute lg:before:w-full lg:before:h-full lg:before:border-4 lg:before:border-blue lg:before:translate-x-3 lg:before:translate-y-3 lg:before:-z-[1]">
					<img
						src={profile1}
						alt="Rashid Ameer"
						className="rounded-sm max-w-xs mx-auto"
					/>
				</div>

				<div className="max-w-[65ch]">
					<p className="mb-5">
						My exciting journey into web development began in 2022.
						Since then, I've been immersed in the world of coding,
						continuously building my skills in HTML, CSS, and
						JavaScript. With a passion for crafting intuitive and
						visually engaging websites, I'm committed to evolving as
						a front-end web developer. I believe that every line of
						code tells a story, and I'm excited to write mine.
					</p>

					{/* more details like location */}
					<div className="grid grid-cols-2 gap-5">
						<AboutDetail
							title={"Location"}
							infoList={[{ id: 1, description: "Pakistan" }]}
						/>

						<AboutDetail
							title={"Phone"}
							infoList={[{ id: 1, description: "+923135212834" }]}
						/>

						<AboutDetail
							styleClasses={"col-span-full"}
							title={"Education"}
							infoList={[
								{
									id: 1,
									description:
										"Intermediate from Punjab Group of Colleges:  2017 - 2019",
								},
								{
									id: 2,
									description:
										"BS (Hons) in Computer Science from Sukkur IBA University: 2020 - Present",
								},
							]}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default About;
