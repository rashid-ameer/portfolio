import React from "react";

const AboutDetail = ({ styleClasses, title, infoList }) => {
	return (
		<div className={`${styleClasses}`}>
			<h3 className="text-blue font-medium mb-1">{title}</h3>
			<div className="space-y-0.5">
				{infoList.map((item) => {
					return <p key={item.key}>{item.description}</p>;
				})}
			</div>
		</div>
	);
};

export default AboutDetail;
