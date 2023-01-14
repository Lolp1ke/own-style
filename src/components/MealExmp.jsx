import React from "react";

function MealExmp(subtitle, title, desc, img) {
	return (
		<div className="features__container">
			<article className="features__article">
				<p className="features__text text">{subtitle}</p>
				<h2 className="features__title title">{title}</h2>
				<p className="features__desc">{desc}</p>
			</article>
			<img
				src={process.env.PUBLIC_URL + img}
				alt="Meal"
				className="features__img"
			/>
		</div>
	);
}

export default MealExmp;
