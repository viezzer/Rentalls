class App{
	constructor(){
		this.imoveis = [];
		this.numDImoveis = this.imoveis.length;
		this.inquilinos = [];
		this.bairros = [];
		console.log("App Iniciado.")
	}
	showInfo(){
		alert("Imoveis: " + this.numDImoveis + "\nInquilinos: " + this.inquilinos + "\nBairros: " + this.bairros);
	}
	setBairro(nome){
		this.nome = new Bairro(nome);
		this.bairros.push(this.nome);
	}
}
class Imoveis{
	constructor(bairro){
		this.id = "";
		this.bairro = bairro;
		this.inquilino = null;
	}
}
class Inquilino{
	constructor(nome, cpf){
		this.id = indexOf(inquilinos[-1]);
		this.nome = nome;
		this.cpf = cpf;
	}
}
class Bairro{
	constructor(nome){
		this.nome = nome;
		this.imoveis = [];
		this.numDImoveis = this.imoveis.length;
	}
	showInfo(){
		alert("Nome: " + this.nome + "\nNúmero de Imoveis: " + this.numDImoveis);
	}
}

