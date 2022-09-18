var campoLocalizar = document.querySelector("#campo-localizar");
var resLeak = document.querySelector("#resLeak");
var resOk = document.querySelector("#resOk");
var btSubmit = document.querySelector("#submit");
// linha 5
btSubmit.addEventListener("click", function (e) {
	if (campoLocalizar.value.length == 0){
		console.log();
	} else {
		e.preventDefault();					
		console.log(campoLocalizar.value);	
		filtro(campoLocalizar.value, dados);
	}
});
// Linha 15