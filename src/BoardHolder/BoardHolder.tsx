import Board from "../TicTacToe/Board";
import { MainContainer, ScoreBox } from "./styles";
import { useState } from "react";

const BoardHolder = () => {
    const [disableMove, setDisableMove] = useState<boolean>(false);
    const [winCombination, setWinCombination] = useState<number[]>([]);
    const [resetGame, setResetGame] = useState<boolean>(false);
    const [botScore, setBotScore] = useState<number>(0);
    const [userScore, setUserScore] = useState<number>(0);
  
    const resetBoard = () => {
      setDisableMove(false);
      setWinCombination([]);
      setResetGame(!resetGame);
    };

    return (
        <MainContainer>
            <Board
                    disableMove={disableMove}
                    setDisableMove={setDisableMove}
                    winCombination={winCombination}
                    setWinCombination={setWinCombination}
                    resetGame={resetGame}
                    userScore={userScore}
                    botScore={botScore}
                    setBotScore={setBotScore}
                    setUserScore={setUserScore}
            />

            <ScoreBox>
                <h1>Paul: {botScore}</h1>
                <h1>You: {userScore}</h1>
            </ScoreBox>

            <button onClick={resetBoard}>Reset Game</button>
        </MainContainer>
    )
}

export default BoardHolder;