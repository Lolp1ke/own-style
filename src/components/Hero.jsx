import React from "react";

import "../assets/styles/hero.css";

function Hero() {
	return (
		<section className="hero">
			<article className="hero__article">
				<h1 className="hero__title title">Momentum</h1>
				<p className="hero__text text">
					Launch your product — and savor the momentum.
				</p>
				<button className="hero__button">Get the App</button>
			</article>
			<img
				src={process.env.PUBLIC_URL + "/assets/images/hero.png"}
				alt="app"
				className="hero__image"
			/>
		</section>
	);
}

export default Hero;
