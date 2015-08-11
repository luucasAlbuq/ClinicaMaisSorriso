angular.module('sorrirApp').controller('pacienteCtrl',function($scope,pacienteService){

	$scope.alertaCadastro = false;

	$scope.pacientes = 
			[{nome:"Lucas Albuquerque de Almeida",email:'lucas@email.com', dataCadastro: new Date(),idade:23,cpf:'08683806445',telefone:'8399461705',endereco:'Rua dos Alfeneiros'},
			{nome:"Maria pereira da Silva",email:'maria@email.com',dataCadastro: new Date(), idade:57,cpf:'458683806445',telefone:'8399777705',endereco:'Rua dos Pirilanpos'},
			{nome:"Carla Porto Cruz",email:'carla@email.com',dataCadastro: new Date(),idade:17,cpf:'08453806445',telefone:'8399488805',endereco:'Baixada das Pulgas'}];


	$scope.cadastrar = function(paciente, form){
		if(form.$valid){
			paciente.dataCadastro = new Date();
			pacienteService.cadastrarPaciente(paciente);
			$scope.paciente	= undefined;
		}
	}

	$scope.apagarPacientes = function(pacientes){
		$scope.pacientes = pacientes.filter(function(paciente){
			/*Retorna todos os pacientes que não estão selecionados*/
			if(!paciente.selecionado) return paciente;
		});
	}

	$scope.isPacienteSelecionado = function(pacientes){
		return pacientes.some(function(paciente){
			return paciente.selecionado;
		});
	}

	$scope.ordenarPor = function(campo){
		$scope.criterioOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	}

	$scope.getData = function(){
		return new Date();
	}

	$scope.limpar = function(){
		$scope.paciente = undefined;
		$scope.formCadastroPaciente.$setPristine();		
	}

	/*Inicializar conexão com BD remoto*/
	$scope.inicializarParse = function(){
		var JAVASCRIPT_KEY = "RXYzNKK9hXH0NRUGpSHlosk3x5sxbfliUEBhVhxd";
  		var APPLICATION_ID = "qBElNASWfi8xR8WNYt9KiB3rhDnKtUPH18tl9Bbv";

    	Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
	}

	$scope.buscarPaciente = function (id){
		var id = 'ut7skfrlQp';
		return pacienteService.getPaciente(id).then(function(data){
			return data;
		});
	}
});