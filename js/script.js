var campoLocalizar = document.querySelector("#campo-localizar");
var res = document.querySelector("#res");
var btSubmit = document.querySelector("#submit");
// linha 5
btSubmit.addEventListener("click", function (e) {
	if (campoLocalizar.value.length == 0){
		console.log();
	} else {
		e.preventDefault();							
		setTimeout(() => { res.innerHTML = "Procurando por dados..."; }, 500);	// Linha 10
		setTimeout(() => { filtro(campoLocalizar.value)		; }, 2000);
		setTimeout(() => { campoLocalizar.value = ""           ; }, 3000);
	}
});
// Linha 15