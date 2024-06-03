import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Tarefa'
import { Buttons } from '../../styles'

type TagProps = {
    $status?: enums.Status
    $prioridade?: enums.Prioridade
    $parametros: 'status' | 'prioridade'
}

function qualPrioridade(props: TagProps): string {
    if (props.$parametros === 'status') {
        if (props.$status === enums.Status.PENDENTE) return variaveis.amarelo2
        if (props.$status === enums.Status.CONCLUIDA) return variaveis.verde
    } else {
        if (props.$prioridade === enums.Prioridade.IMPORTANTE)
            return variaveis.amarelo
        if (props.$prioridade === enums.Prioridade.URGENTE)
            return variaveis.vermelho
    }
    return '#ccc'
}

export const Card = styled.div`
    padding: 16px;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 16px;
    margin-top: 32px;
    background-color: ${({ theme }) => theme.cardTarefa};

    label {
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        input {
            margin-right: 8px;
        }

        cursor: pointer;
    }
`
export const Title = styled.h3`
    font-weight: bold;
    font-size: 18px;
    color: ${({ theme }) => theme.textoEscuro};
`
export const Tag = styled.span<TagProps>`
    font-weight: bold;
    font-size: 14px;
    padding: 4px 8px;
    margin-right: 16px;
    color: #fff;
    display: inline-block;
    background-color: ${(props) => qualPrioridade(props)};
    border-radius: 8px;
`
export const Descricao = styled.textarea`
    resize: none;
    display: block;
    border: none;
    background-color: transparent;
    width: 100%;
    color: ${({ theme }) => theme.textoDesc};
    font-family: 'Roboto Mono', monospace;
    margin: 16px 0;
    line-height: 24px;
`
export const BarraAction = styled.div`
    padding-top: 16px;
    border-top: 1px solid ${({ theme }) => theme.borderAction};
`

export const ButtonCancelarRemover = styled(Buttons)`
    background-color: ${variaveis.vermelho};
`
