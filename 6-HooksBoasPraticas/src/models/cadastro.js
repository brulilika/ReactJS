function validarCpf(cpf){
    if(cpf.length !== 11){
      return {erro:true, texto: "CPF deve ter 11 dígitos"}
    }
    else{
      return {erro:false, texto: ""}
    }
}

function validarSenha(senha){
    if(senha.length < 4 || senha.length > 15){
      return {erro:true, texto: "Senha deve ter de 4 à 15 dígitos"}
    }
    else{
      return {erro:false, texto: ""}
    }
}

export {validarCpf, validarSenha};