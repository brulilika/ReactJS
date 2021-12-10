import React, {Component} from "react";
import "./estilo.css";

export class FormularioCadastro extends Component{
    constructor(props){
        super(props);
        this.titulo = "";
        this.mensagem = "";
    }

    _handle(evento){
        //this em JS é dinamico
        //evento externo(evento) é queme sta achando e ele nao consegue encontrar o this
        //ele no caso so tem a referencia
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleTextArea(evento){
        evento.stopPropagation();
        this.mensagem = evento.target.value;
    }   

    _buttonClick(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.buttonClick(this.titulo, this.mensagem);
    }

    render( ){
        return (
            <form className="form-cadastro"
              onSubmit={this._buttonClick.bind(this)}
            >
              <input
                type="text"
                placeholder="Título"
                className="form-cadastro_input"
                onChange={this._handle.bind(this)}
              />
              <textarea
                rows={15}
                placeholder="Escreva sua nota..."
                className="form-cadastro_input"
                onChange={this._handleTextArea.bind(this)}
              />
              <button className="form-cadastro_input form-cadastro_submit">
                Criar Nota
              </button>
            </form>
          );
    };
}
export default FormularioCadastro;