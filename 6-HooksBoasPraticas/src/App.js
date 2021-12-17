import './App.css';
import React from 'react';
import FormularioCadastro from './componentes/Formulario/Formulario'
import {Container, Typography} from '@material-ui/core'

/*A criação de componentes react por meio de functions é algo novo*/

function App() {
  return (
    <Container component="article" maxwidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCpf}/>
    </Container>
    
  );
}

function aoEnviarForm(dados){

}

function validarCpf(cpf){
  if(cpf.length !== 11){
    return {erro:true, texto: "CPF deve ter 11 dígitos"}
  }
  else{
    return {erro:false, texto: ""}
  }
}

export default App;
