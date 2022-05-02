import styled, { keyframes } from "styled-components";

const rotateRight = keyframes`
    from {
        transform: rotateZ(0deg);
    }
    to {
        transform: rotateZ(45deg);
    }
`;

const rotateLeft = keyframes`
    from {
        transform: rotateZ(0deg);
    }

    to {
        transform: rotateZ(-45deg);
    }
`;

const circleGrow = keyframes`
from {
    transform: scale(0);
}

to {
    transform: scale(1);
}
`;

export const BoardHolder = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoardGame = styled.div`
  height: 600px;
  width: 600px;
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
`;

interface CellProps {
  disableMove: boolean;
}

export const Cell = styled.div<CellProps>`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${(props) => (props.disableMove ? `none` : `auto`)};
`;

interface BoardCircleProps {
  isWinner: boolean;
}

export const BoardCircle = styled.div<BoardCircleProps>`
  height: 45px;
  width: 45px;
  background:  white;
  border-radius: 50%;
  transform: scale(0);
  animation-name: ${circleGrow};
  animation-duration: 0.4s;
  animation-iteration-count: ${(props) => props.isWinner ? `infinite` : `1`};
  animation-fill-mode: forwards;
`;

interface BoardCrossProps {
  isWinner: boolean;
}

export const BoardCross = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
`;

export const CrossTop = styled.div<BoardCrossProps>`
  height: 6px;
  border-radius: 10px;
  width: 100%;
  position: absolute;
  background: white;
  top: 0;
  left: 0;
  margin-top: 50%;
  transform: rotateZ(0deg);
  animation-name: ${rotateLeft};
  animation-duration: 0.4s;
  animation-iteration-count: ${(props) => props.isWinner ? `infinite` : `1`};
  animation-fill-mode: forwards;
`;

export const CrossBottom = styled.div<BoardCrossProps>`
  height: 6px;
  border-radius: 10px;
  width: 100%;
  position: absolute;
  background: white;
  top: 0;
  left: 0;
  margin-top: 50%;
  transform: rotateZ(0deg);
  animation-name: ${rotateRight};
  animation-duration: 0.4s;
  animation-iteration-count: ${(props) => props.isWinner ? `infinite` : `1`};
  animation-fill-mode: forwards;
`;


