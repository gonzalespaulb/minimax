import { BoardHolder, BoardGame } from "./styles";
import BoardCell from "./BoardCell";
import { useState, useEffect } from "react";
import { players } from "./enums";

interface IBoardPositions {
  boardPosition: number;
  ownedBy: null | string;
}

const Board = () => {
  const [boardPositions, setBoardPositions] = useState<IBoardPositions[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState(``);

  useEffect(() => {
    initializeBoard();
    setCurrentPlayer(players.USER);
  }, []);

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

  const checkForWinners = () => {
    for (const combo of winningCombos) {
      let matchCount = 0;

      let currentOwnedBy = boardPositions[combo[0]].ownedBy;

      for (const position of combo) {
        if (boardPositions[position].ownedBy) {
          if (currentOwnedBy === boardPositions[position].ownedBy) {
            matchCount++;
          } else {
            break;
          }
        } else {
          break;
        }

        if (matchCount === 3) {
          console.log(`${currentOwnedBy} is the winner!!`);
        }
      }
    }
  };


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


  const renderBoardCells = () => {
    return boardPositions.map((position, i) => {
      return (
        <BoardCell
          key={i}
          position={position}
          boardPositions={boardPositions}
          setBoardPositions={setBoardPositions}
          checkForWinners={checkForWinners}
          setCurrentPlayer={setCurrentPlayer}
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
