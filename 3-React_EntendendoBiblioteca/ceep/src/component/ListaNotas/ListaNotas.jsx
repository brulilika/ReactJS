import React, {Component} from "react";
import CardNotas from "../CardNotas";
import "./estilo.css";

export class ListaNotas extends Component{
    render( ){
        return (
            <ul className="lista-notas">
              {this.props.notas.map((nota, index) => {
                return (
                  <li className="lista-notas_item" key={index}>
                    <CardNotas titulo={nota.titulo} text={nota.texto}/>
                  </li>
                );
              })}
            </ul>
          );
    };
}
export default ListaNotas;