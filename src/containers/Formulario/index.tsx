import { FormEvent, useState } from 'react'
import { ButtonSalvar, Campo, MainContainer, Titulo } from '../../styles'
import { Form, Opcoes, Seletores } from './styles'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/tarefas'
import * as enums from '../../utils/enums/Tarefa'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

    function cadastrarTarefa(e: FormEvent) {
        e.preventDefault()
        dispatch(
            cadastrar({
                descricao,
                titulo,
                prioridade,
                status: enums.Status.PENDENTE
            })
        )
        navigate('/')
    }
    return (
        <MainContainer>
            <Form onSubmit={(e) => cadastrarTarefa(e)}>
                <Titulo>Nova Tarefa</Titulo>
                <Campo
                    value={titulo}
                    onChange={({ target }) => setTitulo(target.value)}
                    type="text"
                    placeholder="Titulo"
                />
                <Campo
                    value={descricao}
                    onChange={({ target }) => setDescricao(target.value)}
                    type="text"
                    as="textarea"
                    placeholder="Descrição da tarefa"
                ></Campo>
                <Opcoes>
                    <p>Prioridade</p>
                    {Object.values(enums.Prioridade).map((prioridade) => (
                        <Seletores key={prioridade}>
                            <input
                                value={prioridade}
                                type="radio"
                                name="prioridade"
                                id={prioridade}
                                onChange={(e) =>
                                    setPrioridade(
                                        e.target.value as enums.Prioridade
                                    )
                                }
                                defaultChecked={
                                    prioridade === enums.Prioridade.NORMAL
                                } //Explicar isso
                            />
                            <label htmlFor={prioridade}>{prioridade}</label>
                        </Seletores>
                    ))}
                </Opcoes>
                <ButtonSalvar type="submit">Cadastrar</ButtonSalvar>
            </Form>
        </MainContainer>
    )
}

export default Formulario
