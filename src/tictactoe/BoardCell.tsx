import { FC } from "react";
import { BoardCellStyle } from "./styles";
import { useState } from "react";

interface IBoardCell {
  key: number;
  pos: number;
  player1: any;
  player2: any;
  setPlayer1: Function;
  setPlayer2: Function;
  currentPlayer: any;
  setCurrentPlayer: Function;
  checkForWinners: Function;
}

const BoardCell: FC<IBoardCell> = ({
  key,
  pos,
  currentPlayer,
  setCurrentPlayer,
  player1,
  player2,
  setPlayer1, 
  setPlayer2,
  checkForWinners
}) => {
  const [filled, setFilled] = useState(false);

  const position = key;

  const clicked = () => {
    setFilled(!filled);

    if (currentPlayer === player1) {
      setCurrentPlayer(player2);
      setPlayer1([...player1, pos])
      checkForWinners();
      
    } else {
      setCurrentPlayer(player1);
      setPlayer2([...player2, pos])
      checkForWinners();
    }
  };

  return (
    <BoardCellStyle filled={filled} onClick={clicked}>
      {position}
    </BoardCellStyle>
  );
};

export default BoardCell;
