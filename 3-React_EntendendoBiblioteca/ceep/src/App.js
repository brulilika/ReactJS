import React, {Component} from "react";
import ListaNotas from "./component/ListaNotas/ListaNotas";
import FormularioCadastro from "./component/FormularioCadastro/FormularioCadastro";
import "./assets/app.css";
import './assets/index.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      notas:[]
    }
  }

  buttonClick(titulo, mensagem){
    const novaNota = {titulo, mensagem};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    //renderiza de novo o objeto
    //this.render();
    this.setState(novoEstado)
  }

  //JSX
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.buttonClick.bind(this)}/>
        <ListaNotas notas={this.state.notas}/>
      </section>
    );
  }
};

//react = lib
//React = ecossistema
export default App;
