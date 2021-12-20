import { Step, Stepper, StepLabel, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import FormularioPessoal from './DadosPessoais/FormularioPessoal';
import FormularioEntregas from './Entrega/FormularioEntrega';
import FormularioLogin from './Login/FormularioLogin';

//descontrucao do proprio parametro
function FormularioCadastro({aoEnviar, validacoes}){

    const [etapa, setEtapa] = useState(0);
    const [dados, setDados] = useState();

    useEffect(() => {
        if(etapa === formularios.length-1){
            aoEnviar(dados);
          }
    });

    const formularios = [
        <FormularioLogin aoEnviar={coletarDados} validacoes={validacoes}/>,
        <FormularioPessoal aoEnviar={coletarDados} validacoes={validacoes}/>,
        <FormularioEntregas aoEnviar={coletarDados} validacoes={validacoes}/>,
        <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
    ]

    function coletarDados(dadosAdicionados){
        setDados({...dados, ...dadosAdicionados});
        setEtapa(etapa+1);
    }

    return (
        <>
            <Stepper activeStep={etapa}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios[etapa]}
        </>
    );
}



export default FormularioCadastro;