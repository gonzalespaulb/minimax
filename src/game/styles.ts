import styled from "styled-components";

export const BoardHolder = styled.div`
    height: 100vh;
    width: 100vw;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Board = styled.div`
    height: 600px;
    width: 600px;
    background: blue;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    padding: 10px;
`;

export const Cell = styled.div`
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface SpaceTakenIndicatorProps {
    filled: boolean;
}

export const SpaceTakenIndicator = styled.h1<SpaceTakenIndicatorProps>`
    font-size: 50px;
    opacity: ${(props) => props.filled ? `1` : `0`};
`;
