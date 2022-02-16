import { Cell } from "./styles";
import { FC } from "react";
import { BoardCellProps, IBoardPositions } from "./models";
import { players } from "./enums";

const BoardCell: FC<BoardCellProps> = ({
  index,
  boardPositions,
  setBoardPositions,
  position,
  currentPlayer,
  setCurrentPlayer,
  playerToggle,
}) => {
  const updatePositions = (player: string, chosenPosition: number) => {
    const newBoard = boardPositions.slice();
    const newOwner = newBoard[chosenPosition];
    newOwner.ownedBy = player;

    setBoardPositions(newBoard);
  };

  const botMove = () => {
    let movesLeft: IBoardPositions[] = [];
    boardPositions.map((position) => {
      if (position.ownedBy) {
        return;
      } else {
        movesLeft.push(position);
      }
    });

    const botDesiredMove = Math.floor(Math.random() * movesLeft.length);
    updatePositions(players.BOT, movesLeft[botDesiredMove].boardPosition);
  };



  const fillSpace = () => {

    updatePositions(players.USER, index);


    setTimeout(() => {
      botMove();
    }, 1000);
  };

  return <Cell onClick={fillSpace} filled={position.ownedBy}></Cell>;
};

export default BoardCell;
