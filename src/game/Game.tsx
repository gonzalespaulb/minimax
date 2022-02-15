import { Board, BoardHolder } from "./styles";
import GameCell from "./GameCell";
import { useState, useEffect } from "react";

const Game = () => {

  const [currentPlayer, setCurrentPlayer] = useState(`player1`);
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [winner, setWinner] = useState<number[]>([]);

  useEffect(() => {
    checkForWinners();
  }, [currentPlayer])

  const winningCombo = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];


const checkForWinners = () => {
  winningCombo.map((combo) => {
    const currPlayer : number[] = currentPlayer === `player1` ? player2 : player1;
    const num1 = currPlayer.includes(combo[0]);
    const num2 = currPlayer.includes(combo[1]);
    const num3 = currPlayer.includes(combo[2]);

    if(num1 && num2 && num3) {
      setWinner(combo);
    } else {
      return;
    }
  })
}

  const boardPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const renderBoardCells = () => {
    return boardPositions.map((position, i) => {
      return (
        <GameCell
          key={i}
          player1={player1}
          player2={player2}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          position={position}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          winner={winner}
        />
      );
    });
  };


  return (
    <BoardHolder>
      <Board>{renderBoardCells()}</Board>
    </BoardHolder>
  );
};

export default Game;
