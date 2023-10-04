import React from "react";

const Section = ({ styleClasses, children }) => {
	return <div className={`${styleClasses}`}>{children}</div>;
};

export default Section;
