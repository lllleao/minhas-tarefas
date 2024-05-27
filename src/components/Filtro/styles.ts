import styled from 'styled-components'

import { Props } from '.'

type PropsStyle = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsStyle>`
    padding: 8px;
    color: ${(props) => (props.active ? '#1E90FF' : '#5e5e5e')};
    border: 1px solid ${(props) => (props.active ? '#1E90FF' : '#a1a1a1')};
    border-radius: 8px;
    background-color: ${(props) => (props.active ? '#fff' : '#fcfcfc')};
`

export const Contador = styled.span`
    font-size: 24px;
    font-weight: bold;
    display: block;
`

export const Label = styled.span`
    font-size: 14px;
`
