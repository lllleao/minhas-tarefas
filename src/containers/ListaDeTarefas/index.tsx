import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
    const tarefas = useSelector((state: RootReducer) => state.tarefas.itens)
    const { termo, categoria, valor } = useSelector(
        (state: RootReducer) => state.filtro
    )

    const filtrarTarefas = () => {
        let tarefasFiltradas = tarefas
        if (termo !== undefined) {
            tarefasFiltradas = tarefasFiltradas.filter(
                (t) =>
                    t.titulo
                        .toLocaleLowerCase()
                        .search(termo.toLocaleLowerCase()) >= 0
            )

            if (categoria === 'prioridade') {
                tarefasFiltradas = tarefasFiltradas.filter(
                    (t) => t.prioridade === valor
                )
            } else if (categoria === 'status') {
                tarefasFiltradas = tarefasFiltradas.filter(
                    (t) => t.status === valor
                )
            }
            return tarefasFiltradas
        } else {
            return tarefas
        }
    }

    const mostrarMensagem = (quantidade: number) => {
        let mensagem = ''
        const complementacao =
            termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

        if (categoria === 'todas') {
            mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${categoria}" ${complementacao}`
        } else {
            mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${`${categoria} = ${valor}`}" ${complementacao}`
        }
        return mensagem
    }
    const tarefasFiltradas = filtrarTarefas()
    const mensagem = mostrarMensagem(tarefasFiltradas.length)

    return (
        <MainContainer>
            <Titulo>{mensagem}</Titulo>
            {/* Usaremos simbolos de marcação para fazer as aspas, pois se usamos elas diretamente, dará erro */}
            <ul>
                {tarefasFiltradas.map(
                    ({ titulo, descricao, prioridade, status, id }) => (
                        <li key={id}>
                            <Tarefa
                                id={id}
                                titulo={titulo}
                                descricao={descricao}
                                prioridade={prioridade}
                                status={status}
                            />
                        </li>
                    )
                )}
            </ul>
        </MainContainer>
    )
}

export default ListaDeTarefas
