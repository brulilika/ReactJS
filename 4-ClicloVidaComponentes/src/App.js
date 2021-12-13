import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaCategorias from "./components/ListaCategorias";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor(){
    super();

    //O uso do state faz com que qualquer alteração que seja realizada nas propriedades
    //que são observadas, ao ser realizado alguma alteração, todo o objeto e seus filhos
    //sejam RE-RENDERIZADO, no caso, como estamos fazendo esse companhamento no App, toda
    //a aplicação seria renderizada novamente -> podendo gerar um problema de desempenho
    this.state = {
      notas:[],
      categorias: []
    }
  }

  //A ideia é que o React seja apenas uma biblioteca de visualização,
  //o ideal seria que os dados ficassem em locais difentes, em uma arquitetura ideal

  criarNota(titulo, texto, categoria){
    const novaNota = {titulo, texto, categoria};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayCategorias};
    this.setState(novoEstado);
  }
  

  deletarNota(indice){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(indice,1);
    this.setState({notas:arrayNotas})
    console.log("Deletando");
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} categorias={this.state.categorias}/>
        <main className="conteudo-principal">
          <ListaCategorias adicionarCategoria={this.adicionarCategoria.bind(this)} categorias={this.state.categorias}/>
          <ListaDeNotas notas={this.state.notas} apagarNota={this.deletarNota.bind(this)}/>
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
