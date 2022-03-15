import styled, {keyframes} from "styled-components";

const move = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const BoardHolder = styled.div`
    height: 100vh;
    width: 100vw;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BoardGame = styled.div`
    height: 600px;
    width: 600px;
    background: blue;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    padding: 10px;
`;

interface CellProps {
    filled: string;
    disableMove: boolean;
}

export const Cell = styled.div<CellProps>`

    background: ${(props) => props.filled};
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: ${(props) => props.disableMove ? `none` : `auto`};
`;