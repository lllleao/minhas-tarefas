import styled from 'styled-components'

export const Aside = styled.aside`
    padding: 16px;
    background-color: ${(props) => props.theme.backgroundAside};
    height: 100vh;
`
export const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
`

export const BotaoTema = styled.div`
    label {
        margin: 32px auto 0;
        cursor: pointer;
        display: block;
        width: 40px;
        height: 20px;
        border-radius: 50px;
        border: 1px solid ${({ theme }) => theme.interrupBorder};
        position: relative;

        &::after {
            content: '';
            position: absolute;
            height: 14px;
            width: 14px;
            background-color: ${({ theme }) => theme.interrupBolinha};
            border-radius: 50%;
            top: 2px;
            left: 2px;
            transition: left 0.3s;
        }
    }
    input {
        display: none;

        &:checked ~ label::after {
            left: 22px;
        }
    }
`
