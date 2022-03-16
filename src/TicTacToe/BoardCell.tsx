import {
  Cell,
  BoardCross,
  CrossTop,
  CrossBottom,
  BoardCircle,
} from "./styles";
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
  winCombination,
  disableMove,
}) => {

// CODEBLOCK ---------------------------------------------------------------------------------- POSITION UPDATER

  const updatePositions = (player: string, chosenPosition: number) => {
    // NOTE -- CREATES A SHALLOW COPY OF  THE EXISTING BOARD
    const newBoard = boardPositions.slice();
    const newOwner = newBoard[chosenPosition];

    // NOTE -- IF ALREADY OWNED DISABLE CLICKING
    if (newOwner.ownedBy) {
      return false;
    } else {
      // NOTE -- CHANGES NULL INTO WHICHEVER PLAYER
      newOwner.ownedBy = player;
      setBoardPositions(newBoard);
      checkForWinners();
      return true;
    }
  };

// CODEBLOCK ---------------------------------------------------------------------------------- BOT MOVE

  const botMove = () => {
    if (!checkForWinners()) {
      setDisableMove(false);

      // NOTE -- ONLY GIVES THE BOT ITEMS IN ARRAY THAT ARE NULL
      let movesLeft: IBoardPositions[] = [];

      boardPositions?.map((position) => {
        if (position.ownedBy) {
          return;
        } else {
          movesLeft.push(position);
        }
      });

      // NOTE -- STOPS BOT FROM MOVING WHEN THERE ARE NO MOVES LEFT
      if (movesLeft.length > 1) {
        const botDesiredMove = Math.floor(Math.random() * movesLeft.length);
        updatePositions(players.BOT, movesLeft[botDesiredMove].boardPosition);
        setCurrentPlayer(players.USER);
      }
    }
  };

// CODEBLOCK ---------------------------------------------------------------------------------- USER MOVE

  const userMove = () => {
    if (!checkForWinners()) {
      // NOTE -- INDEX DETERMINES WHICH CELL IS BEING CLICKED
      if (updatePositions(players.USER, index)) {
        setCurrentPlayer(players.BOT);
        setDisableMove(true);

        setTimeout(() => {
          botMove();
        }, 1000);
      }
    }
  };

// CODEBLOCK ---------------------------------------------------------------------------------- CIRCLE OR CROSS

  const circleOrCross = () => {
    if (position.ownedBy) {
      return position.ownedBy === players.USER ? (
        <BoardCross>
          <CrossTop isWinner={winCombination.includes(position.boardPosition)}/>
          <CrossBottom isWinner={winCombination.includes(position.boardPosition)}/>
        </BoardCross>
      ) : (
        <BoardCircle isWinner={winCombination.includes(position.boardPosition)}/>
      );
    }
  };

// CODEBLOCK ---------------------------------------------------------------------------------- JSX

  return (
    <Cell onClick={userMove} disableMove={disableMove}>
      {circleOrCross()}
    </Cell>
  );
};

export default BoardCell;
