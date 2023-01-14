import React from "react";

import "../assets/styles/footer.css";

function Footer() {
	return (
		<footer className="footer">
			<img
				src={process.env.PUBLIC_URL + "/assets/images/logo-small.png"}
				alt="logo-small"
				className="footer__logo"
			/>
			<nav className="footer__nav">
				<a href={"#"} className="footer__link">
					Email
				</a>
				<a href={"#"} className="footer__link">
					Instagram
				</a>
				<a href={"#"} className="footer__link">
					Facebook
				</a>
				<a href={"#"} className="footer__link">
					Twitter
				</a>
				<a href={"#"} className="footer__link">
					Image Licence Info
				</a>
				<a href={"#"} className="footer__link">
					Powered by Webflow
				</a>
			</nav>
		</footer>
	);
}

export default Footer;
