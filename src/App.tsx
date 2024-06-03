import { Provider } from 'react-redux'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import dark from './themes/dark'
import light from './themes/light'
import store from './store'
import Home from './pages/Home/intex'
import Cadastro from './pages/Cadastro'

function App() {
    const rotas = createBrowserRouter([
        {
            path: '/',
            element: <Home trocarTema={trocarTema} />
        },
        {
            path: '/novo',
            element: <Cadastro />
        }
    ])
    const [tema, setTema] = useState(false)

    function trocarTema() {
        setTema(!tema)
    }

    return (
        <Provider store={store}>
            <ThemeProvider theme={tema ? dark : light}>
                <EstiloGlobal />
                <Container>
                    <RouterProvider router={rotas} />
                </Container>
            </ThemeProvider>
        </Provider>
    )
}

export default App
