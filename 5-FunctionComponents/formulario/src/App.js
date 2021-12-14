import './App.css';
import React from 'react';
import FormularioCadastro from './componentes/Formulario/Formulario'

/*A criação de componentes react por meio de functions é algo novo*/

function App() {
  return (
    <section>
      <h1>Pao</h1>
      <FormularioCadastro />
    </section>
    
  );
}

export default App;
