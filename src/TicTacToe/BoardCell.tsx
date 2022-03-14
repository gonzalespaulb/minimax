import { Cell } from "./styles";
import { FC } from "react";
import { BoardCellProps, IBoardPositions } from "./models";
import { players } from "./enums";

const BoardCell: FC<BoardCellProps> = ({
  index,
  boardPositions,
  setBoardPositions,
  position,
  checkForWinners,
  setCurrentPlayer,
  setDisableMove,
  disableMove,
}) => {
  const updatePositions = (player: string, chosenPosition: number) => {
    // NOTE -- CREATES A SHALLOW COPY OF  THE EXISTING BOARD
    const newBoard = boardPositions.slice();

    // NOTE -- CHANGES NULL INTO WHICHEVER PLAYER
    const newOwner = newBoard[chosenPosition];

    if (newOwner.ownedBy) {
      return false;
    } else {
      newOwner.ownedBy = player;
      setBoardPositions(newBoard);
      checkForWinners();
      return true;
    }
  };

  const botMove = () => {
    setDisableMove(false);
    // NOTE -- ONLY GIVES THE BOT ITEMS IN ARRAY THAT ARE NULL
    let movesLeft: IBoardPositions[] = [];
    boardPositions.map((position) => {
      if (position.ownedBy) {
        return;
      } else {
        movesLeft.push(position);
      }
    });

    // NOTE -- RANDOMIZES THE MOVES BOT CAN MAKE BASED ON THE UNFILLED SPACES
    const botDesiredMove = Math.floor(Math.random() * movesLeft.length);
    updatePositions(players.BOT, movesLeft[botDesiredMove].boardPosition);
    setCurrentPlayer(players.BOT);
  };

  const userMove = () => {
    if(updatePositions(players.USER, index)){
      setCurrentPlayer(players.USER);
      setDisableMove(true);
      setTimeout(() => {
        botMove();
      }, 1000);
    }
    else {
      return;
    }
  };

  const whosCell = () => {
    if (position.ownedBy) {
      return position.ownedBy === players.USER ? `orange` : `white`;
    } else {
      return `red`;
    }
  };

  // BUG -- OVERRIDES THE PREVIOUS USER'S MOVE WHEN CELL IS CLICKED TWICE. TIE ON THE LAST SQUARE ENABLES THIS TOO
  return (
    <Cell
      onClick={userMove}
      filled={whosCell()}
      disableMove={disableMove}
    ></Cell>
  );
};

export default BoardCell;
