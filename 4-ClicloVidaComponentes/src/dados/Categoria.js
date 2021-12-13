//Criando uma categoria observavel para que seja possivel
//renderizar os componentes de fato importantes quando houver alteracao na 
//classe de categoria
export default class Categoria{
    constructor(){
        this.categorias = [];
        this._inscritos = []; //componentes  que precisarão ser atualizados quando houver alteracao
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        console.log(this._inscritos.length)
        this._inscritos = this._inscritos.filter(f => f !== func);
        console.log(this._inscritos.length)
    }

    notificar(){
        this._inscritos.forEach(func =>{
            func(this.categorias);
        } );
    }
    adicionarCategoria(novaCaegoria){
        this.categorias.push(novaCaegoria);
        this.notificar();
    }
}