export interface IBoardPositions {
  boardPosition: number;
  ownedBy: null | string;
}

export interface IBoardProps {
  disableMove: boolean;
  winCombination: number[];
  resetGame:boolean;
  setWinCombination: Function;
  setDisableMove: Function;
  botScore: number;
  userScore: number;
  setBotScore: Function;
  setUserScore: Function;
  setCurrentPlayer: Function;
}

export interface BoardCellProps {
  index: number;
  position: IBoardPositions;
  boardPositions: IBoardPositions[];
  disableMove: boolean;
  winCombination: number[];
  setBoardPositions: Function;
  checkForWinners: Function;
  setCurrentPlayer: Function;
  setDisableMove: Function;
}
