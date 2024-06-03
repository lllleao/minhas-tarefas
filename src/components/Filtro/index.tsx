import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
    legenda: string
    categoria: 'prioridade' | 'status' | 'todas'
    valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({
    legenda,
    categoria: categorias,
    valor: valores
}: Props) => {
    const dispatch = useDispatch()
    const { itens } = useSelector((state: RootReducer) => state.tarefas)
    const { categoria, valor } = useSelector(
        (state: RootReducer) => state.filtro
    )

    function filtrarCards() {
        dispatch(
            alterarFiltro({
                categoria: categorias,
                valor: valores
            })
        )
    }

    const ativo = () => {
        const mesmaCategoria = categoria === categorias
        const mesmoValor = valor === valores

        return mesmaCategoria && mesmoValor
    }

    const contador = () => {
        if (categorias === 'todas') return itens.length
        if (categorias === 'prioridade') {
            return itens.filter((t) => t.prioridade === valores).length
        }
        if (categorias === 'status') {
            return itens.filter((t) => t.status === valores).length
        }
    }

    return (
        <S.Card onClick={filtrarCards} $active={ativo()}>
            <S.Contador>{contador()}</S.Contador>
            <S.Label>{legenda}</S.Label>
        </S.Card>
    )
}

export default FiltroCard
