export function calculateWinner(square) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[2, 4, 6],
		[0, 4, 8],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (square[a] && square[a] === square[b] && square[a] === square[c]) {
			return {
				winner: square[a],
				line: lines[i],
				isDraw: false,
				gameOver: true,
			};
		}
	}
	let isDraw = true;
	for (let i = 0; i < square.length; i++) {
		if (square[i] === null) {
			isDraw = false;
		}
	}
	return {
		winner: null,
		line: null,
		isDraw: isDraw,
		gameOver: false,
	};
}
