var numero1 = Number(prompt("Digite aqui seu primeiro número"));
var operadores = prompt("Digite a operação matemática");
var numero2 = Number(prompt("Digite aqui seu segundo número"));

var resultado = numero1 + numero2;

var resultado = numero1 - numero2;


// escolha (var)
// caso "isso"
// faz aquilo
// caso "teste"
// faz uma coisa
// fimFaca


function calcularNovamente(){
    var novoCalculo = confirm("Deseja fazer um novo calculo?")
    if(novoCalculo == true){
        location.reload();
    }
    }

switch(operador){
    case "+": 
        var resultado = numero1 + numero2;
        alert(resultado);
        break;
    case "-":
         var resultado = numero1 - numero2;
         alert(resultado);
         break;
    case  "/":
          var resultado = numero1 / numero2;
          alert(resultado);
          break;
    case  "*":
         var resultado = numero1 * numero2;
         alert(resultado);
         break;
}  
