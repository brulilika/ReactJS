import './App.css';
import React from 'react';
import FormularioCadastro from './componentes/Formulario/Formulario'
import {Container, Typography} from '@material-ui/core'
import {validarCpf, validarSenha} from './models/cadastro.js'

/*A criação de componentes react por meio de functions é algo novo*/

function App() {
  return (
    <Container component="article" maxwidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{cpf: validarCpf, senha: validarSenha}}/>
    </Container>
    
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}



export default App;
