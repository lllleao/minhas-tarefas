import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './style'
import { ButtonSalvar, Buttons } from '../../styles'
import { alterarStatus, remove, salvar } from '../../store/reducers/tarefas'
import * as enums from '../../utils/enums/Tarefa'

import Tarefas from '../../models/Tarefas'

type Props = Tarefas

const Tarefa = ({
    descricao: descricaoOriginal,
    titulo,
    prioridade,
    status,
    id
}: Props) => {
    const [editar, setEditar] = useState(false)

    const [descricao, setDescricao] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        if (descricaoOriginal.length > 0) {
            setDescricao(descricaoOriginal)
        }
    }, [descricaoOriginal])

    const removeEdicao = () => {
        setDescricao(descricaoOriginal)
        setEditar(!editar)
    }

    const salvarEdicao = () => {
        dispatch(
            salvar({
                descricao,
                id
            })
        )
        setEditar(!editar)
    }

    const tarefaConcluida = (finalizado: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            alterarStatus({
                id,
                finalizado: finalizado.target.checked
            })
        )
    }
    // const tarefaConcluida = (finalizado: boolean) => {
    //     dispatch(
    //         alterarStatus({
    //             id,
    //             finalizado
    //         })
    //     )
    // }

    return (
        <S.Card>
            <label>
                <input
                    type="checkbox"
                    id={titulo}
                    onChange={(evento) => tarefaConcluida(evento)}
                    checked={status === enums.Status.CONCLUIDA}
                />
                <S.Title>
                    {editar && <em>Editando: </em>}
                    {titulo}
                </S.Title>
            </label>
            <S.Tag $parametros="prioridade" $prioridade={prioridade}>
                {prioridade}
            </S.Tag>
            <S.Tag $parametros="status" $status={status}>
                {status}
            </S.Tag>
            <S.Descricao
                disabled={!editar}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />
            <S.BarraAction>
                {editar ? (
                    <>
                        <ButtonSalvar onClick={salvarEdicao}>
                            Salvar
                        </ButtonSalvar>
                        <S.ButtonCancelarRemover onClick={removeEdicao}>
                            Cancelar
                        </S.ButtonCancelarRemover>
                    </>
                ) : (
                    <>
                        <Buttons onClick={() => setEditar(!editar)}>
                            Editar
                        </Buttons>
                        <S.ButtonCancelarRemover
                            onClick={() => dispatch(remove(id))}
                        >
                            Remover
                        </S.ButtonCancelarRemover>
                    </>
                )}
            </S.BarraAction>
        </S.Card>
    )
}

export default Tarefa
