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
    grid-template-columns: 1fr 1fr;
    margin: 20px auto;
    width: 100vh;
    gap: 20px;

    @media screen {
    animation: ${ContainerAnimation} 1s;
    }
`


export const Fotos = styled.div`
    width: 100%;
`

export const Foto = styled.img`
    width: 100%;
    margin: 15px 0;
    border-radius: 10px;
`

export const Preco = styled.p`
    background-color: #6ce149;
    color: #26431d;
    width: 80px;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
`

export const LoadingAnimation = keyframes`
    to{
        transform: rotate(360deg);
    }
`

export const Loading = styled.div`
    margin: 20px auto;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #CCC;
    border: 10px solid;
    border-right-color: transparent;

    @media screen {
    animation: ${LoadingAnimation} 1s infinite;
    }
`