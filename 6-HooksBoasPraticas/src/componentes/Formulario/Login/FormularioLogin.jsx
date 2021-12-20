import { TextField, Button } from "@material-ui/core";
import React, { useState, useContext } from "react";
import validacoesCadastro from "../../../context/ValidacoesCadastro";

function FormularioLogin ({aoEnviar}) {
    const[email,setEmail] = useState();
    const[senha,setSenha] = useState();
    const[erros, setErros] = useState({senha: {erro: false, texto:""}});

    const validacoes = useContext(validacoesCadastro)

    function validarCampos(evento){
        const {name, value} = evento.target;
        const valido = validacoes[name](value);
        const novoEstado = {...erros};
        novoEstado[name] = valido;
        setErros(novoEstado)
    }

    function possoEnviar(){
        for(let campo in erros){
            if(erros[campo].erro)
                return false;
        }
        return true;
    }

    return (
        <form onSubmit={e => {
            e.preventDefault();
            if(possoEnviar()){
                aoEnviar({email,senha});
            }
        }}>
            <TextField id="email" label="Email" name="email" type="email" variant="outlined" margin="normal" fullWidth 
                       onChange={ e => {
                            setEmail(e.target.value)
                       }}/>
            <TextField id="password" label="Senha" name="senha" type="password" variant="outlined" margin="normal" fullWidth
                        onChange={ e => {
                            setSenha(e.target.value)
                       }}
                       onBlur={validarCampos} error-={erros.senha.erro} helperText={erros.senha.texto}/>
            <Button type="submit" variant="contained" color="primary" >PRÓXIMO</Button>
        </form>
    );
}

export default FormularioLogin;