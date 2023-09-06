/* Funções em Javascript */

/*
Na manipulação no banco de dados nós utilizamos
o CRUD <- Create(usado no código é "post"), Read(usado no código é "get"),
Update(usado no código é "put"), Delete(não muda, então usamos "delete" mesmo).
/*  


Existem 2 tipos de funções:

- Reservadas pela linguagem
alert()
prompt()
console.log()

- Personalizadas
Criadas pelo usuário, é necessário que sejam construídas
utilizando a estrutura
function nomeDaFuncao() {

}
e em seguida chamadas para serem executadas

Em cada função há a presença dos parênteses () que podem estar vazio ou não.
Os parênteses recebem um argumento. Quando este argumento é uma variável, dizemos que ele
recebe um parâmetro

Argumento é tudo aquilo que está dentro do parêntese, como um texto por exemplo(uma string), 
esse argumento se torna um parâmetro quando passa a ser uma variável.
*/

// Função personalizada sem argumento.
// console.log("Olá mundo!") possui um argumento do tipo string.
function saudacao(){
    console.log("Olá mundo!");
}

saudacao();

//Função personalizada com PARÂMETRO, pois se trata de uma variável
// previamente declara e que será utilizada no bloco de código.
var nome;
function despedida(nome) {
    console.log("Tchau, " + nome);
}

despedida("João");


var a, b;
function soma(a, b) {
    return a + b;
}

var resultado = soma(5, 3);
console.log(resultado);


