/**** DEFINICAO DE FILTROS ****/
angular.module('sorrirApp')
.filter('cep',function(){
	return function (input) {
		var str = input + '';
		str = str.replace(/\D/g, '');
		if (str.length === 11) {
				str = str.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
		} else {
				str = str.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
		}
		return str;
		};
})
.filter('telefone',function(){
	return function(input){
		var str = input + '';
		str = str.replace(/\D/g, '');
		if (str.length === 11) {
				str = str.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
	    } else {
				str = str.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
		}
	return str;
	};
})
.filter('cpf',function(){
	return function (input) {
		var str = input + '';
		str = str.replace(/\D/g, '');
			str = str.replace(/(\d{3})(\d)/, '$1.$2');
		str = str.replace(/(\d{3})(\d)/, '$1.$2');
		str = str.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
		return str;
		};
})
/*Deixa os nomes com as iniciais maiusculas*/
.filter('nome',function(){
	return function(input){
		var listaDeNomes = input.split(" ");
		var listaDeNomesFormatada = listaDeNomes.map(function (nome) {
			if (/(da|de)/.test(nome)) return nome;
			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
		});
		return listaDeNomesFormatada.join(" ");
	}
})
/*Exibe uma quantidade X de caracteres da string*/
.filter("ellipsis", function () {
	return function (input, size) {
		if (input.length <= size) return input;
		var output = input.substring(0,(size || 2)) + "...";
		return output;
	};
});;