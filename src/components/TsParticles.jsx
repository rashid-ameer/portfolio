import { useCallback, useMemo } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.

const TsParticles = () => {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const options = useMemo(
		() => ({
			name: "Basic",
			particles: {
				number: {
					value: 80,
					density: {
						enable: true,
						area: 800,
					},
				},
				color: {
					value: "#a257fd",
					// animation: {
					// 	enable: true,
					// 	speed: 20,
					// 	sync: true,
					// },
				},
				shape: {
					type: "circle",
				},
				opacity: {
					value: 0.5,
				},
				size: {
					value: {
						min: 1,
						max: 3,
					},
				},
				links: {
					enable: true,
					distance: 130,
					color: "#63dcfb",
					opacity: 0.4,
					width: 1,
				},
				move: {
					enable: true,
					speed: 1,
					outModes: {
						default: "bounce",
					},
					random: false,
					straight: false,
				},
			},
			interactivity: {
				events: {
					onHover: {
						enable: true,
						mode: "repulse",
					},
					onClick: {
						enable: false,
						mode: "push",
					},
					resize: true,
				},
				modes: {
					repulse: {
						distance: 200,
						duration: 0.4,
					},
					push: {
						quantity: 4,
					},
				},
			},
			fpsLimit: 120,
			background: {
				color: "#0000000",
			},
			detectRetina: true,
		}),
		[]
	);

	return (
		<Particles
			className="absolute inset-0 -z-3"
			id="tsparticles"
			init={particlesInit}
			options={options}
		/>
	);
};

export default TsParticles;
