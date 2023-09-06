var numero

numero = prompt("Digite um número que será a tabuada: ");

for (contador = 0; contador < 101; contador = contador +1) {
    var resultado = numero * contador; 
    alert(numero + " x " + contador + " = " + resultado);
}