//operadores logicos
// > maior que
// < menor que
// == igual (= atribui, == compara valor, === compara valor e tipo)
// >= maior ou igual que 
// <= menor ou igual que
// != diferente


// alternários 
// && e (exige duas condições verdadeiras)
// || ou (exige apenas uma verdadeira)
// ! não não

// se(condição) então
// faz algo
// senão
// faz outra coisa
// fimse

if(true){
    console.log("Sou verdadeiro");
}else{
    console.log("Sou falso :( ");

}

//maior de idade
var idade = (prompt("Qual é a sua idade?"));

 if(idade >= 18){
     alert("Seja bem vindo ao nosso website")
     
 }else{
     alert("Você não tem autorização neste website!")
     location.href = "https://www.google.com.br/";
 }