import React from "react";

const Subtitle = ({ titleOne, titleTwo }) => {
	return (
		<h2 className="text-dark-200 text-3xl font-medium relative before:absolute before:left-0 before:w-[3ch] before:h-1 before:top-full before:bg-dark-200 before:rounded-full">
			{titleOne} <span className="text-blue">{titleTwo}</span>
		</h2>
	);
};

export default Subtitle;
