import FiltroCard from '../../components/Filtro'
import * as S from './style'

const BarraLateral = () => (
    <S.Aside>
        <S.Input type="text" placeholder="Procurar" />
        <S.ContainerCard>
            <FiltroCard legenda="pendentes" contador={1} />
            <FiltroCard legenda="concluídas" contador={2} />
            <FiltroCard legenda="urgentes" contador={3} />
            <FiltroCard legenda="importantes" contador={4} />
            <FiltroCard legenda="normal" contador={5} />
            <FiltroCard legenda="todas" contador={10} active />
        </S.ContainerCard>
    </S.Aside>
)

export default BarraLateral
