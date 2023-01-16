const nome = "Eduarda Leuze"
let nome2 = ""
let pessoaDefault = {
    nome: "Eduarda Leuze",
    idade: "22",
    trabalho:"Dev"
}

let nomes = ["marcelo eltz", "joão carlos", "maia silva"]
let pessoas = [
    {
        nome: "Eduarda Leuze",
        idade: "22",
        trabalho:"Dev"
    },
    {
        nome: "maria silva",
        idade: "55",
        trabalho:"vendedora"
    }
];

function alterarNome() {
    nome2 = "Maria Silva"
    console.log("valor alterado")
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome
    console.log("valor alterado recebendo um nome")
    console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log ("nome:");
    console.log(pessoa.nome);
    
    console.log ("idade:");
    console.log(pessoa.idade);
    
    console.log ("trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa (pessoa) {
pessoas.push(pessoa);
}

adicionarPessoa ({
    nome: "Pedro Silva"
    Idade: 28
    Trabalho: Porteiro
})

console.log(pessoas);

function saveAccount(data) {
    console.log(data);
}

///imprimirPessoa (pessoaDefault);

//imprimirPessoa(){
 //       nome: "Eduarda Leuze",
 //       idade: "22",
 //       trabalho:"Dev"
 //   }  ;

    
//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");
//alterarNome();