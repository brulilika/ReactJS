import './App.css';
import React from 'react';
import FormularioCadastro from './componentes/Formulario/Formulario'
import {Container, Typography} from '@material-ui/core'

/*A criação de componentes react por meio de functions é algo novo*/

function App() {
  return (
    <Container component="article" maxwidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro />
    </Container>
    
  );
}

export default App;
