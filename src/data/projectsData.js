import * as projectImages from "../assets/images";

export const projectsData = [
	{
		id: 1,
		name: "Insagram",
		description:
			"A social app that let's you make make account, create posts, like them, save them, explore other users posts and their profiles.",
		images: [
			{ id: 1, image: projectImages.insagram1 },
			{ id: 2, image: projectImages.insagram2 },
			{ id: 3, image: projectImages.insagram3 },
			{ id: 4, image: projectImages.insagram4 },
			{ id: 5, image: projectImages.insagram5 },
			{ id: 6, image: projectImages.insagram6 },
			{ id: 7, image: projectImages.insagram7 },
		],
		liveLink: "https://insagram.vercel.app",
		githubLink: "https://github.com/RA-Offical/insaGram",
	},
	{
		id: 2,
		name: "RMovies",
		description:
			"A React project that lets you discover and save movies. I designed this platform where users can browse movies, sign up, log in securely, and create their own watchlists.",
		images: [
			{ id: 1, image: projectImages.rmovies1 },
			{ id: 2, image: projectImages.rmovies2 },
			{ id: 3, image: projectImages.rmovies3 },
			{ id: 4, image: projectImages.rmovies4 },
		],
		liveLink: "https://rmovies-rashid-ameer.netlify.app/",
		githubLink: "https://github.com/RA-Offical/movie-app",
	},
	{
		id: 3,
		name: "Admin Dashboard",
		description:
			"An interactive dashboard that let user see their profile, analytics using charts, balance, recent transactions, loans and much more.",
		images: [
			{ id: 1, image: projectImages.dashboard1 },
			{ id: 2, image: projectImages.dashboard2 },
			{ id: 3, image: projectImages.dashboard3 },
		],
		githubLink: "https://github.com/RA-Offical/bank-admin-dashboard",
		liveLink: "https://bank-admin-dashboard.netlify.app/",
	},
	{
		id: 4,
		name: "Ecommerce Product Page",
		description:
			"An Ecommerce Product page built using React that let you see different version of product using slider. You can add product to cart, increase or decrease their amount and also remove all items from cart",
		images: [
			{ id: 1, image: projectImages.product1 },
			{ id: 2, image: projectImages.product2 },
			{ id: 3, image: projectImages.product3 },
		],
		githubLink: "https://github.com/RA-Offical/ecommerce-product-page",
		liveLink: "https://ecommerce-rashid-ameer.netlify.app/",
	},
	{
		id: 5,
		name: "Weather App",
		description:
			"A React project that lets you find the weather and forecast on basis of searching your city. It also fetch weather using your current location.",
		images: [
			{ id: 1, image: projectImages.weather1 },
			{ id: 2, image: projectImages.weather2 },
			{ id: 3, image: projectImages.weather3 },
		],
		githubLink: "https://github.com/RA-Offical/advance-weather-app",
		liveLink: "https://advance-weather-app.netlify.app/",
	},
];
