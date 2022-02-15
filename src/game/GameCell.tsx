import { Cell, SpaceTakenIndicator } from "./styles";
import { useState } from "react";
import { FC } from "react";

interface GameCellProps {
  player1: number[];
  player2: number[];
  position: number;
  currentPlayer: string;
  setPlayer1: Function;
  setPlayer2: Function;
  setCurrentPlayer: Function;
}

const GameCell: FC<GameCellProps> = ({
  player1,
  player2,
  setPlayer1,
  setPlayer2,
  setCurrentPlayer,
  currentPlayer,
  position,
}) => {
  const [filled, setFilled] = useState(false);

  const spaceTaken = () => {
    if (currentPlayer === `player1`) {
      setPlayer1([...player1, position]);
      setFilled(true);
      setCurrentPlayer(`player2`);
    } else {
      setPlayer2([...player2, position]);
      setFilled(true);
      setCurrentPlayer(`player1`);
    }
  };


  const isChosen = () => {
      if(player1.includes(position)) {
          return `X`;
      } 

      if(player2.includes(position)) {
          return `O`;
      }
  }


  return (
    <Cell onClick={spaceTaken}>
      <SpaceTakenIndicator filled={filled}>
        {isChosen()}
      </SpaceTakenIndicator>
    </Cell>
  );
};

export default GameCell;
