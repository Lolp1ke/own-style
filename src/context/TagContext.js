import React, { useContext, useEffect, useRef } from "react";

const TagDataContext = React.createContext();

export function useTag() {
	return useContext(TagDataContext);
}

export function TagDataProvider({ children }) {
	const ref = useRef(null);

	useEffect(() => {
		ref.current = document.getElementById("tagData");
	}, []);

	function getTagData(e) {
		let className = ref.current.children[0];
		let tagName = ref.current.children[1];

		if (e.ctrlKey) {
			ref.current.classList.add("show");

			className.innerText =
				e.target.className !== ""
					? e.target.className
					: "No class name";

			tagName.innerText = e.target.tagName.toLowerCase();
		}
	}

	const value = {
		getTagData,
	};

	return (
		<TagDataContext.Provider value={value}>
			{children}
		</TagDataContext.Provider>
	);
}
