import { TextField, Button } from "@material-ui/core";
import React, {useState} from "react";

function FormularioEntregas ({aoEnviar}) {
    const[endereco,setEndereco] = useState();
    const[complemento,setComplemento] = useState();
    const[cep,setCep] = useState();
    const[estado,setEstado] = useState();
    const[cidade,setCidade] = useState();
    return (
        <form onChange={e => {
            e.defaultPrevented();
            aoEnviar({cep, endereco, complemento, cidade, estado});
        }}>
            <TextField id="endereco" label="Endereço" type="text" variant="outlined" margin="normal" fullWidth onChange={e => setEndereco(e.target.value)}/>
            <TextField id="complemento" label="Complemento" type="text" variant="outlined" margin="normal" fullWidth onChange={e => setComplemento(e.target.value)}/>
            <TextField id="cep" label="CEP" type="text" variant="outlined" margin="normal" onChange={e => setCep(e.target.value)}/>
            <TextField id="estado" label="Estado" type="text" variant="outlined" margin="normal" onChange={e => setEstado(e.target.value)}/>
            <TextField id="cidade" label="Cidade" type="text" variant="outlined" margin="normal" onChange={e => setCidade(e.target.value)}/>
            <Button type="submit" variant="contained" color="primary" fullWidth>Cadastrar</Button>
        </form>
    );
}

export default FormularioEntregas;