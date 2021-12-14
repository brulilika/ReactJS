import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import React, {useState} from 'react';

function FormularioCadastro(){
    //variavel, funcao para ajustar o estado
    const[nome, setNome] = useState("");
    const[sobrenome, setSobrenome] = useState("");
    const[cpf, setCPF] = useState("");


    return (
        <form onSubmit={e => {
            e.preventDefault();
            console.log(nome);
        }}>
            <TextField id="nome" value={nome}  label="Nome" variant="outlined" margin="normal" fullWidth
                        onChange={e => {
                            setNome(e.target.value);
                        }}/>
            <TextField id="sobrenome" value={sobrenome} label="Sobrenome" variant="outlined" margin="normal" fullWidth
                        onChange={e => {
                            setSobrenome(e.target.value);
                        }}/>
            <TextField id="cpf" value={cpf} label="CPF" variant="outlined" margin="normal" fullWidthonChange={e => {
                            setCPF(e.target.value);
                        }}/>
            <FormControlLabel label="Promoções" control={<Switch name="Promoções" defaultChecked/>}/>
            <FormControlLabel label="Novidades" control={<Switch name="Novidades" defaultChecked/>}/>
            <Button type="submit" variant="contained" color="primary">Enviar</Button>
        </form>
    );
}

export default FormularioCadastro;