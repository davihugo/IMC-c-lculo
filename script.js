// função entrar

/*  function entrar (){
    var area = document.getElementById('area');
    var texto = prompt('digite seu nome?');

    if(texto == '' || texto == null) {
        alert("Digite seu nome novamente ");
        area.innerHTML = 'Bem-vindo...';
    } else {
        area.innerHTML ='BEM VINDO ' + texto;

    }
}
function entrar2(nome) {

    var area = document.getElementById('area2');
    var texto = prompt('digite seu sobrenome');
    
    area.innerHTML = nome + " " + texto;

}*/
/*
function apertouomouse (){
    console.log("o mouse foi apertado!");
}

function solteiomouse() {
    console.log ("soltei o botao do mouse!");
}
function passouomouse() {
    console.log("voce passou o mouse em cima do batao!");
}

function tirouomouse () {
    console.log("voce esta tirando o mouse do botao!");
}

function onClick () {
    console.log("Voce clicou no botao");
}

function focado(){
    console.log ("campo focado");
}*/
/*
function validar() {

    var valor = document.getElementById("numero").value;
    var nomeValor = document.getElementById("nome").value;
    
    if(valor.length > 2){
        alert("Digite 2 numeros ou menos");
        document.formulario.numero.focus();
        return false;

    }else if(nomeValor.length < 3) {
        alert("Digite um nome maior");
        return false;
    } else {
        alert ("formulario enviado com sucesso!");
        return true;
    }
}*/
var peso;
var altura;
var imc;
var resultado;

function calcular(){

    peso= document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso/(altura*altura);
    
    if (imc < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi : ' + imc.toFixed(2) + '<h3 style="color:#FF0000" > <br/>Cuidado voce esta muito abaixo do peso! </h3> <br/>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    }else if(imc > 17 && imc < 18.49) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi : ' + imc.toFixed(2) + '<h3 style="color:#FF0000" > <br/>Cuidado voce esta abaixo do peso! </h3> <br/>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    }else if (imc > 18.5 && imc < 24.99) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi : ' + imc.toFixed(2) + '<h3> <br/>Otimo, voce esta no peso certo! </h3> <br/>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    }else if (imc > 25 && imc < 29.99) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi : ' + imc.toFixed(2) + '<h3> <br/>Atençao voce esta acima do peso! </h3> <br/>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    } else {
        return false;
    }
    


}

