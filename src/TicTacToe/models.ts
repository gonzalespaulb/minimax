export interface IBoardPositions {
  boardPosition: number;
  ownedBy: null | string;
}

export interface BoardCellProps {
  index: number;
  position: IBoardPositions;
  boardPositions: IBoardPositions[];
  disableMove: boolean;
  setBoardPositions: Function;
  checkForWinners: Function;
  setCurrentPlayer: Function;
  setDisableMove: Function;
}
