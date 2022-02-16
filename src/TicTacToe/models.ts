export interface IBoardPositions {
  boardPosition: number;
  ownedBy: null | string;
}

export interface BoardCellProps {
  index: number;
  position: IBoardPositions;
  boardPositions: IBoardPositions[];
  setBoardPositions: Function;
}
