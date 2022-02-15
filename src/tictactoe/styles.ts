import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FFF8F0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Board = styled.div`
    height: 400px;
    width: 400px;
    background-color: #ffffff;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
    padding: 10px;
`;  

interface BoardCellStyleProps {
    filled: boolean;
}

export const BoardCellStyle = styled.div<BoardCellStyleProps>`
    background-color: ${(props) => props.filled ? `#333` : `#FFF8F0`};
    display: flex;
    justify-content: center;
    align-items: center;
`;