import React from "react";
import {validarCpf, validarSenha} from '../models/cadastro'

const validacoesCadastro = React.createContext(
    //{cpf: validarCpf, senha: validarSenha}

    //é possivel configurar validacoes padroes neste arquivo e aplicar eles nos componentes
    //que refenrenciarem o context e nao encontram-se dentro de um provider

    //ao colocarmos um provider, a validacao dentro do componente passa a ser executada a 
    //relacionada ao provider
);

export default validacoesCadastro;