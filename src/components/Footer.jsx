import { Container } from ".";
import { GithubIcon, LinkedInIcon, Mail } from "../assets/icons";
import FooterSocial from "./FooterSocial";

const Footer = () => {
	return (
		<Container styleClasses={"text-center space-y-7"}>
			<h2 className="text-3xl xl:text-4xl text-dark-200 font-medium">
				Let's Code Something
				<br /> Amazing Together
			</h2>
			<p>
				For development needs, inquiries, or a friendly connection,
				reach out anytime
			</p>
			<div
				id="social-links"
				className="flex items-center justify-center gap-12 text-base text-dark-200"
			>
				<FooterSocial
					link={"https://github.com/RA-Offical"}
					title="Github"
					Icon={GithubIcon}
				/>
				<FooterSocial
					link={"www.linkedin.com/in/rashid-ameer-b30aa6241"}
					title="LinkedIn"
					Icon={LinkedInIcon}
				/>
				<FooterSocial
					link={"mailto:r.ameer.offical@gamil.com"}
					title={"Mail"}
					Icon={Mail}
				/>
			</div>
		</Container>
	);
};

export default Footer;
