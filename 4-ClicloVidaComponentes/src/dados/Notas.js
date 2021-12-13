export default class ArrayNotas{

    constructor(){
        this.notas = []
    }

    criarNota(titulo, texto, categoria){
        this.notas.push(new Notas(titulo, texto, categoria))
    }

    deletarNota(indice){
        this.notas.splice(indice,1);
    }
}

class Notas{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}