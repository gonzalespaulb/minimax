import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ScoreBox = styled.div`
  display: flex;
  width: 400px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IndicatorProps {
  currentPlayer: string;
  whosTurn: string;
  winCombination: number[];
}

export const Indicator = styled.div<IndicatorProps>`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: white;
  opacity: ${(props) =>
    props.currentPlayer === props.whosTurn && !props.winCombination.length
      ? 1
      : 0};
  transition: opacity 1s ease;
`;
