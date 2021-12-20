import './App.css';
import React from 'react';
import FormularioCadastro from './componentes/Formulario/Formulario'
import {Container, Typography} from '@material-ui/core'
import {validarCpf, validarSenha} from './models/cadastro.js'
import validacoesCadastro from './context/ValidacoesCadastro';

/*A criação de componentes react por meio de functions é algo novo*/

function App() {
  return (
    <Container component="article" maxwidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <validacoesCadastro.Provider value={{cpf: validarCpf, senha: validarSenha}}>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </validacoesCadastro.Provider>
    </Container>
    
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}



export default App;
