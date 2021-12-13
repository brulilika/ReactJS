export default class Categoria{
    constructor(){
        this.categorias = []
    }

    adicionarCategoria(nomeCategoria){
        this.categorias.push(nomeCategoria);
    }
}