import styled from 'styled-components'

export const Aside = styled.aside`
    padding: 16px;
    background-color: #eee;
    height: 100vh;
`
export const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
`
export const Input = styled.input`
    width: 100%;
    margin-bottom: 16px;
    padding: 8px;
    border: none;
    border: 1px solid #666666;
    border-radius: 8px;
    font-weight: bold;
    color: #666666;

    &:focus {
        outline: none;
    }
`
