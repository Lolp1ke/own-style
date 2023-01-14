import React, { useEffect } from "react";

import "./assets/styles/default.css";

import { useTag } from "./context/TagContext";

import Header from "./components/Header";
import Alert from "./components/Alert";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Information from "./components/Information";
import Download from "./components/Download";
import Footer from "./components/Footer";
import StyleChanger from "./components/StyleChanger";

function App() {
	const { getTagData } = useTag();

	useEffect(() => {
		return () => {
			document.querySelectorAll("#getTagData").forEach((el) => {
				console.log(el);
				el.addEventListener("click", function (event) {
					getTagData(event);
				});
			});
		};
	}, []);

	return (
		<>
			<Alert />
			<Header />
			<main>
				<Hero />
				<About />
				<Features />
				<Information />
				<span className="app-image"></span>
				<Download />
			</main>
			<Footer />
			<StyleChanger />
		</>
	);
}

export default App;
