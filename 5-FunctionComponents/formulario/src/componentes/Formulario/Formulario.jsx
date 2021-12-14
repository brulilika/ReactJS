import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import React from 'react';

function FormularioCadastro(){
    return (
        <form>
            <TextField id="nome" label="Nome" variant="outlined"  margin="normal" fullWidth/>
            <TextField id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth/>
            <TextField id="cpf" label="CPF" variant="outlined" margin="normal" fullWidth/>
            <FormControlLabel label="Promoções" control={<Switch name="Promoções" defaultChecked/>}/>
            <FormControlLabel label="Novidades" control={<Switch name="Novidades" defaultChecked/>}/>
            <Button type="submit" variant="contained" color="primary">Enviar</Button>
        </form>
    );
}

export default FormularioCadastro;