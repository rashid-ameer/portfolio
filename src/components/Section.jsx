import React from "react";

const Section = ({ styleClasses, children }) => {
	return (
		<section
			className={`${styleClasses} py-12 lg:py-24 odd:bg-blue-50 even:bg-white`}
		>
			{children}
		</section>
	);
};

export default Section;
