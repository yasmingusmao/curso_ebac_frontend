// Crie uma classe de uma abstração;
class Despesa {
    constructor(descricao, vencimento) {
        if (this.constructor === Despesa) {
            throw new Error("Você não pode criar uma despesa genérica.");
        }
        this.descricao = descricao;
        this.vencimento = vencimento;
        this.pago = false;
    }

    pagar() {
        this.pago = true;
        console.log(`A conta "${this.descricao}" foi paga com sucesso!`);
    }
}

// Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;
class ContaFixa extends Despesa {
    constructor(descricao, vencimento, valorMensal) {
        super(descricao, vencimento);
        this.valorMensal = valorMensal;
    }
}

class ContaVariavel extends Despesa {
    constructor(descricao, vencimento, valor) {
        super(descricao, vencimento);
        this.valor = valor;
    }
}

class ContaParcelada extends Despesa {
    constructor(descricao, vencimento, cartao, parcelas, valor) {
        super(descricao, vencimento);
        this.cartao = cartao;
        this.parcelas = parcelas;
        this.valor = valor;
    }
}

// Crie pelo menos três instâncias de objetos;
const condominio = new ContaFixa("Condomínio", "Dia 10", 650.00);
const luz = new ContaVariavel("Conta de energia", "Dia 25", 150.00);
const pc = new ContaParcelada("Novo PC", "Dia 6", "cartão Nubank", 10, 2050.00);

console.log(condominio);
console.log(luz);
console.log(pc);

pagar(condominio);
console.log(condominio);