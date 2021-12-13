import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaCategorias from "./components/ListaCategorias";
import "./assets/App.css";
import './assets/index.css';
import Categoria from "./dados/Categoria";
import ArrayNotas from "./dados/Notas";
class App extends Component {

  constructor(){
    super();
    this.categorias = new Categoria();
    this.notas = new ArrayNotas();
    //O uso do state faz com que qualquer alteração que seja realizada nas propriedades
    //que são observadas, ao ser realizado alguma alteração, todo o objeto e seus filhos
    //sejam RE-RENDERIZADO, no caso, como estamos fazendo esse companhamento no App, toda
    //a aplicação seria renderizada novamente -> podendo gerar um problema de desempenho
  }

  //A ideia é que o React seja apenas uma biblioteca de visualização,
  //o ideal seria que os dados ficassem em locais difentes, em uma arquitetura ideal

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.notas.adicionarNota.bind(this.notas)} categorias={this.categorias}/>
        <main className="conteudo-principal">
          <ListaCategorias adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} categorias={this.categorias}/>
          <ListaDeNotas notas={this.notas} apagarNota={this.notas.apagarNota.bind(this.notas)}/>
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
