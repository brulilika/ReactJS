import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import React, {useState, useContext} from 'react';
import validacoesCadastro from '../../../context/ValidacoesCadastro';
import useErros from '../../../hooks/useErros';

//descontrucao do proprio parametro
function FormularioPessoal({aoEnviar}){

    //variavel, funcao para ajustar o estado
    const[nome, setNome] = useState("");
    const[sobrenome, setSobrenome] = useState("");
    const[cpf, setCPF] = useState("");
    const[promocao, setPromocaoo] = useState(false);
    const[novidade, setNovidade] = useState(false);
    const validacoes = useContext(validacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);
    

    return (
        <form onSubmit={e => {
            e.preventDefault();
            if(possoEnviar())
                aoEnviar({nome,sobrenome,cpf,promocao, novidade});
        }}>
            <TextField id="nome" value={nome}  label="Nome" variant="outlined" margin="normal" fullWidth
                        onChange={e => {
                            setNome(e.target.value);
                        }}/>
            <TextField id="sobrenome" value={sobrenome} label="Sobrenome" variant="outlined" margin="normal" fullWidth
                        onChange={e => {
                            setSobrenome(e.target.value);
                        }}/>
            <TextField  id="cpf" name="cpf" value={cpf} label="CPF" variant="outlined" margin="normal" 
                        error={erros.cpf.erro} helperText={erros.cpf.texto} required
                        onChange={e => {
                            setCPF(e.target.value); 
                        }}
                        onBlur={validarCampos}
                       />

            <FormControlLabel label="Promoções" control={
                <Switch name="Promoções" checked={promocao}
                    onChange={e =>{
                        setPromocaoo(e.target.checked)
                    }}
                />
                } 
            />
            <FormControlLabel label="Novidades" control={<Switch name="Novidades" checked={novidade} 
                              onChange={e =>{
                                setNovidade(e.target.checked)
                               }}/>} />
            <Button type="submit" variant="contained" color="primary">Enviar</Button>
        </form>
    );
}

export default FormularioPessoal;