function filtro(valor){
	valor = valor.toLowerCase();
	
	msg = "<b>Encontramos vazamentos</b>";
	PulaLinha = "<BR>"
	seta = "=>"

	valor = valor.toLowerCase();
	if (valor == "martahelena@gmail.com" || valor == "1122334455" || valor == "21912345678"){
		res.innerHTML = msg + PulaLinha + "www.googleclassroom.com" + PulaLinha + valor + seta + "Helena123";

	} else if (valor == "joao@gmail.com" || valor == "0099887766" || valor == "2199876543"){	
		res.innerHTML = "Para " + valor + " <b>encontramos o(os) seguinte(s) vazamentos</b><BR>a1b2c3";

	} else {		
		res.innerHTML = "<i>Tudo OK:</i> " + valor;
	};
};													