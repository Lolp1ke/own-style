import React from "react";

import "../assets/styles/about.css";

function About() {
	return (
		<section className="about" id="about">
			<article className="about__article">
				<p className="about__text text">Aenean Consectetur Porta</p>
				<h2 className="about__title title">
					Nullam quis risus eget urna mollis ornare vel eu leo.
				</h2>
				<img
					src={process.env.PUBLIC_URL + "/assets/images/about.png"}
					alt=""
					className="about__img"
				/>
			</article>
		</section>
	);
}

export default About;
