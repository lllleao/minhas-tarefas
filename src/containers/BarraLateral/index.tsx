import { useDispatch } from 'react-redux'
import FiltroCard from '../../components/Filtro'
import * as S from './style'
import { pegarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'

import { Buttons, Campo } from '../../styles/index'
import { useNavigate } from 'react-router-dom'

type Props = {
    trocarTema?: () => void
    novaTarefa: boolean
}

const BarraLateral = ({ trocarTema, novaTarefa }: Props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <S.Aside>
            {novaTarefa ? (
                <>
                    <Campo
                        type="text"
                        placeholder="Procurar"
                        onChange={(e) => dispatch(pegarTermo(e.target.value))}
                    />
                    <S.ContainerCard>
                        <FiltroCard
                            categoria="status"
                            legenda="pendentes"
                            valor={enums.Status.PENDENTE}
                        />
                        <FiltroCard
                            categoria="status"
                            legenda="concluídas"
                            valor={enums.Status.CONCLUIDA}
                        />
                        <FiltroCard
                            categoria="prioridade"
                            legenda="urgentes"
                            valor={enums.Prioridade.URGENTE}
                        />
                        <FiltroCard
                            categoria="prioridade"
                            legenda="importantes"
                            valor={enums.Prioridade.IMPORTANTE}
                        />
                        <FiltroCard
                            categoria="prioridade"
                            legenda="normal"
                            valor={enums.Prioridade.NORMAL}
                        />
                        <FiltroCard categoria="todas" legenda="todas" />
                    </S.ContainerCard>
                    <S.BotaoTema>
                        <input type="checkbox" id="mudar" />
                        <label onClick={trocarTema} htmlFor="mudar"></label>
                    </S.BotaoTema>
                </>
            ) : (
                <Buttons onClick={() => navigate('/')}>
                    Voltar às tarefas
                </Buttons>
            )}
        </S.Aside>
    )
}

export default BarraLateral
