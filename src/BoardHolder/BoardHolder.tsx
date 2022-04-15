import Board from "../TicTacToe/Board";
import { MainContainer, ScoreBox } from "./styles";
import { useState } from "react";

const BoardHolder = () => {
    const [disableMove, setDisableMove] = useState<boolean>(false);
    const [winCombination, setWinCombination] = useState<number[]>([]);
    const [resetGame, setResetGame] = useState<boolean>(false);
  
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
            />

            <ScoreBox>
                <h1>Paul: 1</h1>
                <h1>You: 1</h1>
            </ScoreBox>

            <button>Reset Game</button>
        </MainContainer>
    )
}

export default BoardHolder;