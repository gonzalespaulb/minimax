import { BoardHolder, BoardGame } from "./styles";
import BoardCell from "./BoardCell";
import { useState, useEffect } from "react";
import { players } from "./enums";

interface IBoardPositions {
  boardPosition: number;
  ownedBy: null | string;
}

const Board = () => {
  useEffect(() => {
    initializeBoard();
    setCurrentPlayer(players.USER);
  }, []);

  const [boardPositions, setBoardPositions] = useState<IBoardPositions[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState(``);

  const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const initializeBoard = () => {
    let gameBoard: IBoardPositions[] = [];

    for (let i = 0; i < 9; i++) {
      gameBoard.push({
        boardPosition: i,
        ownedBy: null,
      });
    }

    setBoardPositions(gameBoard);
  };


  const playerToggle = () => {
    setCurrentPlayer(currentPlayer === players.USER ? players.BOT : players.USER);
  }

  const renderBoardCells = () => {
    return boardPositions.map((position, i) => {
      return (
        <BoardCell
          key={i}
          position={position}
          boardPositions={boardPositions}
          setBoardPositions={setBoardPositions}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          playerToggle={playerToggle}
          index={i}
        />
      );
    });
  };

  return (
    <BoardHolder>
      <BoardGame>{renderBoardCells()}</BoardGame>
    </BoardHolder>
  );
};

export default Board;
