function parOuImpar() {
	var valor = document.getElementById("numero");
	if ((valor.value%2)==0) {
		alert("número "+valor.value+" é par!");
	}else{
		alert("número "+valor.value+" é impar!");
	}
}