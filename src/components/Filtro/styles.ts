import styled from 'styled-components'

type PropsStyle = {
    $active?: boolean
}

export const Card = styled.div<PropsStyle>`
    padding: 8px;
    color: ${({ $active, theme }) => ($active ? '#1E90FF' : theme.textoClaro)};
    border: 1px solid ${(props) => (props.$active ? '#1E90FF' : '#a1a1a1')};
    border-radius: 8px;
    background-color: ${(props) =>
        props.$active ? props.theme.filtroAtivo : props.theme.filtroDesativo};
    cursor: pointer;
`

export const Contador = styled.span`
    font-size: 24px;
    font-weight: bold;
    display: block;
`

export const Label = styled.span`
    font-size: 14px;
`
