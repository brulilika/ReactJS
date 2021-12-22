import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./components/UI/Temas";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";

import { GlobalStyle } from "./components/GlobalStyle";
import { BtnTema } from "./components/UI";
import SwitchTema from "./components/SwitchTema/SwitchTema";

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitchTema tema={tema} />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
