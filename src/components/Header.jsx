import React, { useRef } from "react";

import "../assets/styles/header.css";

function Header() {
	const burgerRef = useRef();
	const menuRef = useRef();

	function openMenu() {
		burgerRef.current.classList.toggle("burger-menu-active");
		menuRef.current.classList.toggle("mobile-nav-list");
		if (window.innerWidth < 520) {
			document.documentElement.style.overflow === "hidden"
				? (document.documentElement.style.overflow = "visible")
				: (document.documentElement.style.overflow = "hidden");
		}
	}

	return (
		<header className="header">
			<img
				src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
				alt="logo"
				className="header__logo"
			/>
			<nav className="header__nav">
				<ul
					ref={menuRef}
					className="header__nav-list"
					onClick={openMenu}
				>
					<li className="header__item">
						<a href={"#about"}>About</a>
					</li>
					<li className="header__item">
						<a href={"#features"}>Features</a>
					</li>
					<li className="header__item">
						<a href={"#how"}>How To Use</a>
					</li>
					<li className="header__item">
						<a href={"#download"}>Download</a>
					</li>
				</ul>
			</nav>
			<div ref={burgerRef} className="burger-menu" onClick={openMenu}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</header>
	);
}

export default Header;
