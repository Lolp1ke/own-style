import React from "react";

function Advantages(title, text) {
	return (
		<div className="features__advantage">
			<h2 className="features__advantage-title">{title}</h2>
			<p className="features__advantage-text">{text}</p>
		</div>
	);
}

export default Advantages;
