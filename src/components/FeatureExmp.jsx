import React from "react";

function FeatureExmp(title, desc, img) {
	return (
		<div className="features__block">
			<img
				src={process.env.PUBLIC_URL + img}
				alt="feature"
				className="features__img"
			/>
			<article className="features__feature-article">
				<h2 className="features__feature-title">{title}</h2>
				<p className="features__feature-desc">{desc}</p>
			</article>
		</div>
	);
}

export default FeatureExmp;
