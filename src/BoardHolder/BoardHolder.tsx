import Board from "../TicTacToe/Board";
import { Indicator, MainContainer, Score, ScoreBox } from "./styles";
import { useState } from "react";
import { players } from "../TicTacToe/enums";
import Cube from "../Cube/Cube";

const BoardHolder = () => {
    const [disableMove, setDisableMove] = useState<boolean>(false);
    const [winCombination, setWinCombination] = useState<number[]>([]);
    const [resetGame, setResetGame] = useState<boolean>(false);
    const [botScore, setBotScore] = useState<number>(0);
    const [userScore, setUserScore] = useState<number>(0);
    const [currentPlayer, setCurrentPlayer] = useState(``);
    

    const resetBoard = () => {
        setDisableMove(false);
        setWinCombination([]);
        setResetGame(!resetGame);
      };
    return (
        <MainContainer>
            <Cube></Cube>
            {/* <Board
                    disableMove={disableMove}
                    setDisableMove={setDisableMove}
                    winCombination={winCombination}
                    setWinCombination={setWinCombination}
                    resetGame={resetGame}
                    userScore={userScore}
                    botScore={botScore}
                    setBotScore={setBotScore}
                    setUserScore={setUserScore}
                    setCurrentPlayer={setCurrentPlayer}
            />

            
        <button onClick={resetBoard}>Reset Game</button> */}
        <ScoreBox>
            <Score>
                <h1>Paul: {botScore}</h1>
                <Indicator  currentPlayer={currentPlayer} whosTurn={players.BOT} winCombination={winCombination}/>
            </Score>

            <Score>
            <h1>You: {userScore}</h1>
            <Indicator  currentPlayer={currentPlayer} whosTurn={players.USER} winCombination={winCombination}/>
            </Score>
        </ScoreBox>
        </MainContainer>
    )
}

export default BoardHolder;