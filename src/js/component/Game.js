import React, { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "./CalculateWinner";
import Board from "./Board";
import Swal from "sweetalert2";

export default function Game() {
	const [square, setSquare] = useState(Array(9).fill(null));
	const [isXNext, setXNext] = useState(true);

	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");
	const [ocultar, setOcultar] = useState(false);

	function PrimerPlayer() {
		setOcultar(true);
		setPlayer1(setXNext(isXNext));
	}
	function SegundoPlayer() {
		setOcultar(true);
		setPlayer2(setXNext(!isXNext));
	}

	const winnerInfo = calculateWinner(square);
	const winner = winnerInfo.winner;
	const isGameOver = winnerInfo.gameOver;

	const winnerHighlight = winnerInfo.line;
	let status;

	if (winner) {
		status = "The Winner is " + winner;
	} else if (winnerInfo.isDraw) {
		status = "Its a Draw";
	} else {
		status = "Next Player is " + (isXNext ? "X" : "O");
	}

	function renderSquare(i) {
		return (
			<Square
				onClick={() => {
					if (isGameOver === false) {
						if (square[i] === null) {
							const nextSquare = square.slice();
							nextSquare[i] = isXNext ? "X" : "O";
							setSquare(nextSquare);
							setXNext(!isXNext);
						} else {
							Swal.fire({
								title: "¡¡¡Move not valid!!!",
								showClass: {
									popup: "animate__animated animate__fadeInDown",
								},
								hideClass: {
									popup: "animate__animated animate__fadeOutUp",
								},
							});
						}
					} else {
						Swal.fire({
							title: "¡¡¡Game is Over!!!",
							showClass: {
								popup: "animate__animated animate__fadeInDown",
							},
							hideClass: {
								popup: "animate__animated animate__fadeOutUp",
							},
						});
					}
				}}
				value={square[i]}
				highlightWinner={winnerHighlight && winnerHighlight.includes(i)}
			/>
		);
	}

	return (
		<>
			<div className="titulo">
				<h1>Tic Tac Toe in React.js</h1>
			</div>

			<Board
				startPlayer1={PrimerPlayer}
				startPlayer2={SegundoPlayer}
				ocultar={ocultar}
			/>
			{ocultar ? (
				<div className="btns">
					<div className="status"> {status} </div>

					<div className="container2 text-center">
						<div className="board-row">
							<div>
								{renderSquare(0)}
								{renderSquare(1)}
								{renderSquare(2)}
							</div>
							<div>
								{renderSquare(3)}
								{renderSquare(4)}
								{renderSquare(5)}
							</div>
							<div>
								{renderSquare(6)}
								{renderSquare(7)}
								{renderSquare(8)}
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}
