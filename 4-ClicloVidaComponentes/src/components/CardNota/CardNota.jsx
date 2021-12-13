import React, { Component } from "react";
import "./estilo.css";
//Isso somente funciona pois quando criamos o App com npx
//vem o pacote SVGR
import {ReactComponent as TrashSVG} from "../../assets/trash_delete.svg"

class CardNota extends Component {
  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }


  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          {/* <img src="../../assets/trash_delete.svg"/>*/}
          {/* <img src={TrashSVG}/> */}
          <TrashSVG onClick={this.apagar.bind(this)}/>
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
