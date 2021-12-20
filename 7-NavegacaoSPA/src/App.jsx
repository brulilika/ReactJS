import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Page404'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/sobre'>
            <Sobre/>
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
