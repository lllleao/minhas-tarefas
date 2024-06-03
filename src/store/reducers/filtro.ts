import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

type PropsFiltro = {
    termo?: string
    categoria: 'prioridade' | 'status' | 'todas'
    valor?: enums.Prioridade | enums.Status
}

const initialState: PropsFiltro = {
    termo: '',
    categoria: 'todas'
}

const filtroSlice = createSlice({
    name: 'filtro',
    initialState,
    reducers: {
        pegarTermo: (state, action: PayloadAction<string>) => {
            state.termo = action.payload
        },
        alterarFiltro: (state, action: PayloadAction<PropsFiltro>) => {
            state.categoria = action.payload.categoria
            state.valor = action.payload.valor
        }
    }
})

export const { pegarTermo, alterarFiltro } = filtroSlice.actions
export default filtroSlice.reducer
