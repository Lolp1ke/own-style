import React, { useRef } from "react";

import "../assets/styles/alert.css";

function Alert() {
	const alertRef = useRef(null);

	function closePopUp() {
		navigator.clipboard.writeText(
			"." + alertRef.current.children[0].innerText
		);

		alertRef.current.classList.remove("show");
	}

	return (
		<section ref={alertRef} id="tagData" className="alert">
			<h2 className="alert__title">Class Name</h2>
			<p className="alert__text">Tag Name</p>
			<button className="alert__btn" onClick={closePopUp}>
				Copy
			</button>
		</section>
	);
}

export default Alert;
