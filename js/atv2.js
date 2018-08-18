function maiorIdade(argument) {
	var ano = document.getElementById("ano");
	console.log(ano.value);
	var idade = 2018 - ano.value;
	console.log(idade);
//pegar a data do sistema
	var DataSistema = new Date();
	var anoSistema = DataSistema.getFullYear();
	console.log(anoSistema);
	idade = anoSistema - ano.value;
	console.log("Você possui: "+idade);
}