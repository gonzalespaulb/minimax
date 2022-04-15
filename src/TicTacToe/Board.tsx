import { BoardGame } from "./styles";
import BoardCell from "./BoardCell";
import { useState, useEffect } from "react";
import { players } from "./enums";
import { IBoardPositions } from "./models";
import { IBoardProps } from "./models";

import { FC } from "react";

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

const Board: FC<IBoardProps> = ({
  disableMove,
  winCombination,
  resetGame,
  setWinCombination,
  setDisableMove,
  setBotScore,
  setUserScore,
  botScore,
  userScore,
}) => {
  const [boardPositions, setBoardPositions] = useState<IBoardPositions[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState(``);

  useEffect(() => {
    initializeBoard();
    setCurrentPlayer(players.USER);
  }, [resetGame]);
// CODEBLOCK ---------------------------------------------------------------------------------- WIN CHECKER

  const checkForWinners = () => {
    for (const combo of winningCombos) {
      let matchCount = 0;

      // NOTE -- SHOWS WHO CURRENTLY OWNS THE COMBOS FIRST NUMBER 
      let currentOwnedBy = boardPositions[combo[0]].ownedBy;
      
      for (const position of combo) {
        // NOTE -- FOR EVERY COMBINATION CHECK IF THE FIRST NUMBER IS OWNED 
        if (boardPositions[position].ownedBy) {

          // NOTE -- SAME OWNER WILL UP THE COUNT RESULTING IN THREE MATCHES FOR THE WINNER
          if (currentOwnedBy === boardPositions[position].ownedBy) {
            matchCount++;
          } else {
            break;
          }
        } else {
          break;
        }

        if (matchCount === 3) {
          setWinCombination(combo);
          console.log(`${currentOwnedBy} is the winner!!`);
          setDisableMove(true);
          currentOwnedBy === players.USER ? setUserScore(userScore + 1) : setBotScore(botScore + 1);
          return true;
        }
      }
    }

    // NOTE -- CHECK FOR A TIE IF THE WINNING COMBO CHECK DOES NOT RETURN ANYTHING
    if (checkForTie()) {
      console.log(`its a tie`);
      setDisableMove(true);
      setUserScore(userScore + 1);
      setBotScore(botScore + 1);
      return true;
    }

    return false;
  };

// CODEBLOCK ---------------------------------------------------------------------------------- TIE CHECKER

  const checkForTie = () => {

    // NOTE -- ARRAY OF ALL POSITIONS
    const owners = boardPositions.map((position) => {
      return position.ownedBy;
    });

    // NOTE -- CHECKS IF ALL IS FILLED 
    const allPositionsOwned = owners.every((position) => {
      return position !== null;
    });

    return allPositionsOwned;
  };


// CODEBLOCK ---------------------------------------------------------------------------------- BOARD INITIALIZE

  // NOTE -- DYNAMICALLY CREATE AN ARRAY OF BOARD POSITIONS
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


// CODEBLOCK ---------------------------------------------------------------------------------- RENDER BOARD CELLS

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
          setDisableMove={setDisableMove}
          disableMove={disableMove}
          winCombination={winCombination}
          index={i}
        />
      );
    });
  };

// CODEBLOCK ---------------------------------------------------------------------------------- JSX

  return (
      <BoardGame>{renderBoardCells()}</BoardGame>
  );
};

export default Board;
