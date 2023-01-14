import React, {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import Editor from "@monaco-editor/react";

import "../assets/styles/default.css";

function Test() {
	const [styleData, setStyle] = useState("");
	const [styleCookie, setStyleCookie] = useCookies(["styleCookie"]);

	function handleChange(code) {
		setStyle(code);
	}

	useEffect(() => {
		return () => {
			setStyle(styleCookie.Style);
		};
	}, [])

	return (
		<section className="code">
			<Editor
				height={"90vh"}
				width={"80%"}
				theme={"vs-dark"}
				defaultLanguage={"css"}
				quikSuggestions={true}
				value={styleData}
				defaultValue={styleCookie.Style !== "" ? styleCookie.Style : "/* Enter your style here */"}
				onChange={handleChange}

			/>

			<div className="test" data-style=".test" onClick={() => {
				setStyleCookie("Style", styleData, {path: "/"});
			}}>Save</div>

			<style type="text/css">
				{`${styleData}`}
			</style>
		</section>
	);
}

export default Test;