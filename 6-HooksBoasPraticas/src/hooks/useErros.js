import React, {useState} from "react";

function useErros(validacoes){
    const estadoInicial = criarEstadoInicial(validacoes);
    const [erros, setErros] = useState(estadoInicial)

    function validarCampos(evento) {
    const { name, value } = evento.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (erros[campo].erro) {
        return false;
      }
    }
    return true;
  }
  return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes) {
    const estadoInicial = {};
    for (let campo in validacoes) {
      estadoInicial[campo] = {erro: false, texto: ""};
    }
  
    return estadoInicial;
}

export default useErros;