import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

type Props = {
    trocarTema?: () => void
}

const Home = ({ trocarTema }: Props) => (
    <>
        <BarraLateral novaTarefa={true} trocarTema={trocarTema} />
        <ListaDeTarefas />
        <BotaoAdicionar />
    </>
)

export default Home
