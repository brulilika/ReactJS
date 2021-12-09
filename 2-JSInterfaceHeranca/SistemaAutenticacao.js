//Aplicacao de polimorfismo - permitindo que diferentes classes sendo tratadas da mesma forma
//Ser autenticavel significa ter o método autenticar e possuir "senha"
export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.possivelAutenticar(autenticar))
            return autenticavel.autenticar(senha);
        return false;
    }

    //DuckType
    static possivelAutenticar(autenticavel){
        return "autenticar" in autenticavel &&
         autenticavel.autenticar instanceof Function
     }
}