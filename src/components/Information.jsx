import React from "react";

import "../assets/styles/info.css";

function Information() {
	return (
		<section className="info">
			<article className="info__article">
				<img
					className="info__quote"
					src={process.env.PUBLIC_URL + "/assets/images/quote.png"}
					alt="quote"
				/>
				<p className="info__text">
					HeadNulla vitae elit libero, a pharetra augue. Duis mollis,
					est non commodo luctus, nisi erat porttitor ligula, eget
					lacinia odio sem nec elit. Pus sit amet fermentum. Donec id
					elit non mi porta gravida at eget metus. Etiam porta sem
					malesuada magna mollis euismod.ing
				</p>
				<span className="info__print">
					<p className="info__writer">Joshua Home</p>
					<span className="info__separator"></span>
					<p className="info__publisher">New York Times</p>
				</span>
			</article>
			<div className="info__companies">
				<img
					src={
						process.env.PUBLIC_URL +
						"/assets/images/companies/1.png"
					}
					alt="webflow"
				/>
				<img
					src={
						process.env.PUBLIC_URL +
						"/assets/images/companies/2.png"
					}
					alt="uber eats"
				/>
				<img
					src={
						process.env.PUBLIC_URL +
						"/assets/images/companies/3.png"
					}
					alt="product hunt"
				/>
				<img
					src={
						process.env.PUBLIC_URL +
						"/assets/images/companies/4.png"
					}
					alt="microsoft"
				/>
				<img
					src={
						process.env.PUBLIC_URL +
						"/assets/images/companies/5.png"
					}
					alt="bitcoin"
				/>
			</div>
		</section>
	);
}

export default Information;
