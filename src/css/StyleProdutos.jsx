import styled, {keyframes} from "styled-components";

export const ContainerAnimation = keyframes`
    from {
        transform: translateX(-20px);
        opacity: 0;
    }
    to{
        transform: translateX(0);
        opacity: 1;
    }
`

export const Container = styled.div`
    display: grid;
    width: 100vh;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 30px auto;
    width: 100vh;
    gap: 40px;

    @media screen {
    animation: ${ContainerAnimation} 1s;
    }
`

export const Content = styled.div`
    width: 100%;
    text-align: center;
    cursor: pointer;
`

export const Img = styled.img`
    width: 100%;

`