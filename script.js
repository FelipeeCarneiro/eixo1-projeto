// Capturando os elementos HTML
var input_usuario = document.querySelector("#input");
var res = document.querySelector(".resultado");
var bt_enviar = document.querySelector(".enviar");

// Testando...
bt_enviar.addEventListener("click", function(event){
    console.log("Enviou");
    // apagandoDiv();
    mostraResultado();
})

var i = 0;

function apagandoDiv(){
    res.textContent = '';
}

function mostraResultado(){
    i += 1;
    res.textContent = input_usuario.value + " resultado: "+ i +".";
    
}
