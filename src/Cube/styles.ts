import styled, {keyframes} from "styled-components";

const rotateCube = keyframes `
    0% {
        transform: rotateX(0deg) rotateY(0deg);
    }

    100% {
        transform: rotateX(360deg) rotateY(360deg);
    }
`;

export const MainContainer = styled.div`
    background: pink;
    perspective: 1500px;
    `;
    
    export const BoxContainer = styled.div`
    transform-style: preserve-3d;
    position: relative;
    // transform: rotateY(45deg) rotateX(45deg);
    // transform: rotateY(45deg);
    animation-name: ${rotateCube};
    animation-duration: 15s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
`;

const Box = styled.div`
    position: absolute;
    height: 200px;
    width: 200px;
    border: 2px solid blue;
    // opacity: 0.5;
`;

export const Front  = styled(Box)`
    transform: translateX(-100px) translateY(-100px) translateZ(100px);
    background: green;
`;

export const Back = styled(Box)`
    background: red;
    transform: translateX(-100px) translateY(-100px) translateZ(-100px);
`;

export const Right = styled(Box)`
    background: purple;
    transform: translateY(-100px) rotateY(90deg);
`;

export const Left = styled(Box)`
    background: orange;
    transform: translateY(-100px) translateX(-200px) rotateY(90deg);
`;

export const Top = styled(Box)`
    background: lightblue;
    transform: translateY(-200px) translateX(-100px) rotateX(90deg);
`;

export const Bottom = styled(Box)`
    background: gray;
    transform: translateX(-100px) rotateX(90deg);
`;