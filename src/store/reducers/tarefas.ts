import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefas from '../../models/Tarefas'
import * as enums from '../../utils/enums/Tarefa'

type PropsTarefa = {
    itens: Tarefas[]
}

type Salvar = {
    id: number
    descricao: string
}
// Tiramos a instância das classes e colocamos o objeto mesmo, ele dá erro se coloca instância de classe
const initialState: PropsTarefa = {
    itens: [
        {
            id: 1,
            titulo: 'Estudar programação',
            prioridade: enums.Prioridade.IMPORTANTE,
            status: enums.Status.PENDENTE,
            descricao: 'Ver vídeo da EBAC'
        },
        {
            id: 2,
            titulo: 'Fazer exercício',
            prioridade: enums.Prioridade.URGENTE,
            status: enums.Status.CONCLUIDA,
            descricao: 'Andar de bicicleta e fazer exercício em casa'
        },
        {
            id: 3,
            titulo: 'Jogar vôlei',
            prioridade: enums.Prioridade.IMPORTANTE,
            status: enums.Status.PENDENTE,
            descricao: 'Terça e quinta ir para a quadra jogar vôlei'
        }
    ]
}

const tarefasSlice = createSlice({
    name: 'tarefas',
    initialState,
    reducers: {
        remove: (state, action: PayloadAction<number>) => {
            const tarefa = action.payload
            state.itens = state.itens.filter((item) => item.id !== tarefa)
        },
        salvar: (state, action: PayloadAction<Salvar>) => {
            const indexTarefa = state.itens.findIndex(
                (t) => t.id === action.payload.id
            )

            if (indexTarefa >= 0) {
                state.itens[indexTarefa].descricao = action.payload.descricao
            }
        },
        cadastrar: (state, action: PayloadAction<Omit<Tarefas, 'id'>>) => {
            const tarefaExiste = state.itens.find(
                (t) =>
                    t.titulo.toLowerCase() ===
                    action.payload.titulo.toLowerCase()
            )

            if (tarefaExiste) {
                alert(`${action.payload.titulo} já está cadastrada`)
            } else {
                const totalTarefas = state.itens.length
                console.log(totalTarefas + 1)
                const novaTarefa = {
                    ...action.payload,
                    id: totalTarefas + 1
                }
                state.itens.push(novaTarefa)
            }
        },
        alterarStatus: (
            state,
            action: PayloadAction<{ id: number; finalizado: boolean }>
        ) => {
            const indexTarefa = state.itens.findIndex(
                (t) => t.id === action.payload.id
            )

            state.itens[indexTarefa].status = action.payload.finalizado
                ? enums.Status.CONCLUIDA
                : enums.Status.PENDENTE
        }
    }
})

export const { remove, salvar, cadastrar, alterarStatus } = tarefasSlice.actions
export default tarefasSlice.reducer
