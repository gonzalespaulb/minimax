import { Cell } from "./styles";
import { FC } from "react";
import { BoardCellProps, IBoardPositions } from "./models";
import { players } from "./enums";

const BoardCell: FC<BoardCellProps> = ({
  index,
  boardPositions,
  setBoardPositions,
  position,
}) => {
  const updatePositions = (player: string, chosenPosition: number) => {
    // Creates a shallow copy of the existing board
    const newBoard = boardPositions.slice();

    // Changes null into whichever player
    const newOwner = newBoard[chosenPosition];
    newOwner.ownedBy = player;

    setBoardPositions(newBoard);
  };

  const botMove = () => {

    // Only gives the bot items in array that are null
    let movesLeft: IBoardPositions[] = [];
    boardPositions.map((position) => {
      if (position.ownedBy) {
        return;
      } else {
        movesLeft.push(position);
      }
    });

    // Randomizes the moves bot can make based on the unfilled spaces
    const botDesiredMove = Math.floor(Math.random() * movesLeft.length);
    updatePositions(players.BOT, movesLeft[botDesiredMove].boardPosition);
  };

  const userMove = () => {
    updatePositions(players.USER, index);

    setTimeout(() => {
      botMove();
    }, 1000);
  };

  const whosCell = () => {
      if(position.ownedBy) {
          return position.ownedBy === players.USER ? `orange` : `white`;
      } else {
          return `red`
      }
  }

  return <Cell onClick={userMove} filled={whosCell()}></Cell>;
};

export default BoardCell;
