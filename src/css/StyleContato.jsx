import styled, {keyframes} from 'styled-components'


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
    grid-template-columns:  1fr 1fr;
    margin: 40px auto;
    width: 700px;

    @media screen {
    animation: ${ContainerAnimation} 1s;
    }
`

export const Dados = styled.div`
    margin-left: 20px;
    margin-top: 10px;
`

export const Img = styled.img`
    width: 100%;
    border-radius: 10px;
`

export const Lista = styled.ul`
    list-style: none;
    margin-bottom: 0.8rem;
`

export const Li = styled.li`
    font-size: 1.2rem;
    margin-bottom: 0.8rem;

    &::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 2px;
        background: #ddd;
        margin-right: 10px;
    }
`