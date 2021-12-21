import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Page404'
import Cabecalho from './components/Cabecalho'
import Posts from './paginas/Post'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Cabecalho/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/sobre'>
            <Sobre/>
          </Route>
          <Route path='/posts/:id'>
            <Posts/>
          </Route>
          <Route>
            <Pagina404/>
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  )
}

export default App
