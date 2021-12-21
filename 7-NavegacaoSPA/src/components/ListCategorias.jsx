import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import {buscaPost} from '../api/api'
import '../assets/css/blog.css'

function ListaCategorias({url}){
    const[categorias, setCategorias] = useState([])

    useEffect(() =>{
        buscaPost('/categorias',setCategorias)
    }, [])

    return(
        <ul className="lista-categorias container flex">
            {
            categorias.map((categoria) => (
                <Link to={`/categoria/${categoria.id}`}>
                    <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                        {categoria.nome}
                    </li>
                </Link>
            ))
            }
        </ul>
    )
}

export default ListaCategorias