class retangulo{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
        this.area = base * altura;
    }
    
}
 let retangulo1 = new retangulo(10, 5);
 console.log(`A base do retângulo é ${retangulo1.base} e a altura é ${retangulo1.altura} e  a sua área é ${retangulo1.area}.`);

 class conta{
    constructor(tipo, titular, saldo){
        this.tipo = tipo;
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
    this.saldo = this.saldo + valor;
    }
    mostrarExtrato() 
    {    console.log(`O extrato da conta de ${this.titular} é: Tipo: ${this.tipo}, Saldo: R$${this.saldo}.`);
    }
    

 }  
let conta1 = new conta("corrente", "João Silva", 1000); 
console.log(`O tipo da conta é ${conta1.tipo}, o titular é ${conta1.titular} e o saldo é R$${conta1.saldo}.`);


let contaCorrente = new conta("corrente", "Maria Souza", 500);
let contaPoupanca = new conta("poupança", "Carlos Oliveira", 2000);

contaCorrente.depositar(200);
contaPoupanca.depositar(500);

console.log(`O saldo da conta corrente de ${contaCorrente.titular} é R$${contaCorrente.saldo}.`);
console.log(`O saldo da conta poupança de ${contaPoupanca.titular} é R$${contaPoupanca.saldo}.`);

console.log(contaCorrente.mostrarExtrato());
contaCorrente.depositar(300);
console.log(`O saldo atualizado da conta corrente de ${contaCorrente.titular} é R$${contaCorrente.saldo}.`);
console.log(contaPoupanca.mostrarExtrato());
