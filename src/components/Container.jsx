import React from "react";

const Container = ({ styleClasses, children }) => {
	return <div className={`container ${styleClasses}`}>{children}</div>;
};

export default Container;
