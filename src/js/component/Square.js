import React from "react";

function Square({ onClick, value, highlightWinner }) {
	const className = "square" + (highlightWinner ? "highlight" : "");
	console.log(value);

	return (
		<button className={className} onClick={onClick}>
			{value}
		</button>
	);
}

export default Square;
