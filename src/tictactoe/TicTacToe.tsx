import { Board, MainContainer } from "./styles";
import BoardCell from "./BoardCell";
import { useState } from "react";

const TicTacToe = () => {

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

  const boardPositions: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const [player1, setPlayer1] = useState<any>([]);
  const [player2, setPlayer2] = useState<any>([]);
  const [currentPlayer, setCurrentPlayer] = useState<any>(``);

  const checkForWinners = () => {

    winningCombo.map((combo) => {
        const firstNum = currentPlayer.includes(combo[0]);
        const secondNum = currentPlayer.includes(combo[1]);
        const thirdNum = currentPlayer.includes(combo[2]);
  
        if(firstNum && secondNum && thirdNum) {
            console.log(combo);
        } else {
            return;
        }
    })
  }

  const renderBoardPositions = () => {
    return boardPositions.map((pos) => {
      return (
        <BoardCell
          key={pos}
          pos={pos}
          player1 ={player1}
          player2={player2}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          checkForWinners={checkForWinners}
        />
      );
    });
  };

  return (
    <MainContainer>
      <Board>{renderBoardPositions()}</Board>
    </MainContainer>
  );
};

export default TicTacToe;


