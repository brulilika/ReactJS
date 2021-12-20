import { TextField, Button } from "@material-ui/core";
import React, { useState, useContext } from "react";
import validacoesCadastro from "../../../context/ValidacoesCadastro";
import useErros from "../../../hooks/useErros";

function FormularioLogin ({aoEnviar}) {
    const[email,setEmail] = useState();
    const[senha,setSenha] = useState();
    const validacoes = useContext(validacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={e => {
            e.preventDefault();
            if(possoEnviar()){
                aoEnviar({email,senha});
            }
        }}>
            <TextField id="email" label="Email" name="email" type="email" variant="outlined" margin="normal" required fullWidth 
                       onChange={ e => {
                            setEmail(e.target.value)
                       }}/>
            <TextField id="password" label="Senha" name="senha" type="password" variant="outlined" margin="normal" required fullWidth
                        onChange={ e => {
                            setSenha(e.target.value)
                       }}
                       onBlur={validarCampos} error-={erros.senha.erro} helperText={erros.senha.texto}/>
            <Button type="submit" variant="contained" color="primary" >PRÓXIMO</Button>
        </form>
    );
}

export default FormularioLogin;