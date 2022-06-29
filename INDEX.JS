class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;
}

const cliente1 = new Cliente();


cliente1.nome = 'Christian';
cliente1.cpf = 10003545645;
cliente1.agencia = 1001;
cliente1.saldo = 0;

const cliente2 = new Cliente();

cliente2.nome = 'Laura';
cliente2.cpf = 100000002;
cliente2.agencia = 1001;
cliente2.saldo = 0;

const contaCorrenteChristian = new ContaCorrente();
contaCorrenteChristian.saldo = 0;
contaCorrenteChristian.agencia = 1001;

console.log(contaCorrenteChristian.saldo);
contaCorrenteChristian.saldo = 100;
console.log(contaCorrenteChristian.saldo);
let valorSacado = 200;
contaCorrenteChristian.saldo -= valorSacado


console.log(contaCorrenteChristian.saldo);
console.log(cliente1)