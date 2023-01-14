import React, { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { useCookies } from "react-cookie";

import "../assets/styles/code.css";

function StyleChanger() {
	const [styleData, setStyle] = useState("");
	const [styleCookie, setStyleCookie] = useCookies(["styleCookie"]);

	const editorRef = useRef(null);

	const defaultStyle = `@import url("https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap");
:root {
\t--animation-speed: 0.5s;
}
* {
\tmargin: 0;
\tpadding: 0;
\tbox-sizing: border-box;
\tscrollbar-width: none;
}
html {
\tscroll-behavior: smooth;
\toverflow-x: hidden;
\theight: 100vh;
}
body {
\tposition: relative;
\tdisplay: flex;
\tjustify-content: center;
\tmargin: auto;
\tfont-family: "Gothic A1", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
\tcursor: default;
\tcolor: #ffffff;
}
a {
\ttext-decoration: none;
\tcolor: #ffffff;
}
ul,
ol {
\tlist-style: none;
}
::-webkit-scrollbar {
\twidth: 0;
}
::selection {
\tcolor: #ffffff;
\tbackground-color: #6B6B6B;
}
.bg {
\tposition: absolute;
\ttop: 0;
\twidth: 100vw;
\theight: 120vh;
\tz-index: -100;
\tbackground: linear-gradient(
\t\t\t287.15deg,
\t\t\t#450e4b 0%,
\t\t\t#3c0c41 24.48%,
\t\t\trgba(207, 0, 99, 0) 100%
\t\t),
\t\t#cf0063;
}
#root {
\twidth: 100%;
}
.title {
\tfont-size: clamp(1.5rem, 1.192rem + 1.31vw, 2.375rem);
\tfont-weight: 400;
}
.text {
\tfont-size: 12px;
\tfont-weight: 400;
\tletter-spacing: 2px;
\ttext-transform: uppercase;
\tcolor: #A8A8A8;
}
.app-image {
\tposition: relative;
\tdisplay: block;
\twidth: 100%;
\theight: 100vh;
\tbackground-image: url("/public/assets/images/random-img.png");
\tbackground-repeat: no-repeat;
\tbackground-position: bottom center;
\tbackground-size: contain;
}`;

	function handleChange(code) {
		setStyle(code);
	}

	function openEditor() {
		editorRef.current.classList.toggle("visible");
		document.querySelector(".code").style.height !== "60%"
			? (document.querySelector(".code").style.height = "60%")
			: (document.querySelector(".code").style.height = 0);
	}

	useEffect(() => {
		return () => {
			setStyle(styleCookie.Style);
		};
	}, []);

	return (
		<>
			<section className="code">
				<img
					className="code__show-code-editor"
					src={
						process.env.PUBLIC_URL +
						"/assets/images/icons/code-editor.svg"
					}
					alt="code-editor"
					onClick={openEditor}
				/>
				<div ref={editorRef} className="code__editor">
					<Editor
						height={"90vh"}
						width={"80%"}
						theme={"vs-dark"}
						defaultLanguage={"css"}
						quikSuggestions={true}
						value={styleData}
						defaultValue={
							styleCookie.Style !== ""
								? styleCookie.Style
								: defaultStyle
						}
						onChange={handleChange}
					/>
					<p
						className="code__save-button"
						onClick={() => {
							setStyleCookie("Style", styleData, { path: "/" });
						}}
					>
						Save
					</p>
				</div>
			</section>
			<style>{styleData}</style>
		</>
	);
}

export default StyleChanger;
