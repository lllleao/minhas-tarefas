import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        transition-property: color background-color border;
        transition-duration: .3s;
    }
`
export const Container = styled.div`
    display: grid;
    grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
    padding: 40px;
    height: 100vh;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.backgroundMain};
`

export const Titulo = styled.h2`
    color: ${({ theme }) => theme.textoEscuro};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 32px;
`
export const Campo = styled.input`
    width: 100%;
    margin-bottom: 16px;
    padding: 8px;
    border: none;
    border: 1px solid #666666;
    border-radius: 8px;
    font-weight: bold;
    color: ${(props) => props.theme.textoInput};
    background-color: ${({ theme }) => theme.cardTarefa};
    &:focus {
        outline: none;
    }
`
export const Buttons = styled.button`
    padding: 8px 12px;
    font-size: 12px;
    background-color: #2f3640;
    color: #fff;
    border: none;
    border-radius: 8px;
    margin-right: 8px;
    cursor: pointer;
    font-weight: bold;
`
export const ButtonSalvar = styled(Buttons)`
    background-color: ${variaveis.verde};
`

export default EstiloGlobal
