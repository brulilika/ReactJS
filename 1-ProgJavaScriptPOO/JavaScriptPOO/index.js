import {Cliente} from "./Models/Cliente.js"
import {ContaCorrente} from "./Models/ContaCorrente.js"

const cliente1 = new Cliente("Bruna", 123456789);
const cliente2 = new Cliente("Lika", 9876543210);


const contaCorrente = new ContaCorrente(1001, cliente1);
contaCorrente.depositar(500);
contaCorrente.sacar(100);

const contaCorrente2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrente.tranferir(valor, contaCorrente2);

console.log(contaCorrente);