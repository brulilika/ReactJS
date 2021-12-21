import React from 'react'
import ListaCategorias from '../components/ListCategorias'
import ListaPost from '../components/ListPost'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaCategorias/>
      <ListaPost url={'/posts'} />

    </main>
  )
}

export default Home
