import React from "react";

import "../assets/styles/downlaod.css";

function Download() {
	return (
		<>
			<section className="download" id="download">
				<h2 className="download__title">Ready to get started?</h2>
				<div className="download__buttons">
					<a href={"#"} className="download__button">
						Download Now
					</a>
					<a href={"#"} className="download__button">
						Get in Touch
					</a>
				</div>
			</section>
			<section className="news">
				<article className="news__article">
					<h2 className="news__title">Get updates from Richard</h2>
					<p className="news__text">
						New course alerts, discounts and free lessons
					</p>
				</article>
				<form className="news__form">
					<input
						className="news__input"
						type="text"
						placeholder="Enter your email"
					/>
					<button
						className="news__button"
						onClick={(e) => {
							e.preventDefault();
						}}
					>
						Subscribe
					</button>
				</form>
			</section>
		</>
	);
}

export default Download;
