import { GithubIcon, ExternalLink } from "../assets/icons";

const SingleProjectInfo = ({ description, githubLink, liveLink }) => {
	return (
		<div className="mt-10">
			<p className="text-center text-base">{description}</p>

			{/* project links */}
			<div className="mt-7 flex justify-center items-center gap-12 text-sm">
				{/* Github link */}
				<a
					href={githubLink}
					target="_blank"
					className="flex items-center gap-2 text-dark-200 hover:text-blue"
				>
					<GithubIcon className="inline-block w-5 h-5 " />
					<span>Github</span>
				</a>
				{/* live preview link */}
				<a
					href={liveLink}
					target="_blank"
					className="flex items-center gap-2 text-dark-200 hover:text-blue"
				>
					<ExternalLink className="inline-block h-5 w-5 " />
					<span>Live Preview</span>
				</a>
			</div>
		</div>
	);
};

export default SingleProjectInfo;
