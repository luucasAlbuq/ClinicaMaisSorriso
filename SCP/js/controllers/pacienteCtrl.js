angular.module('sorrirApp').controller('pacienteCtrl',['$scope','$rootScope','pacienteService',function($scope,$rootScope,pacienteService){

	$scope.alertaCadastro = false;

	$rootScope.pacientes = [];
	
	function carregarPacientes(){
		pacienteService.getAllPacientes().then(function(sucess){
			$rootScope.pacientes = sucess.results;
		});
	}
	
	/* Deve ser inicializado antes de qualquer coisa */
	function inicializarParse(){
		var JAVASCRIPT_KEY = "RXYzNKK9hXH0NRUGpSHlosk3x5sxbfliUEBhVhxd";
  		var APPLICATION_ID = "qBElNASWfi8xR8WNYt9KiB3rhDnKtUPH18tl9Bbv";
    	Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
	}

	$scope.cadastrar = function(paciente, form){
		if(form.$valid){
			paciente.dataCadastro = new Date();
			var saida = pacienteService.cadastrarPaciente(paciente);
			$scope.paciente	= undefined;
			form.$setPristine();
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

	/*Inicializar sistema com conexão com BD remoto*/
	$scope.inicializarSistema = function(){
		inicializarParse();
		carregarPacientes();
	}

	$scope.buscarPaciente = function (id){
		return pacienteService.getPaciente(id).then(function(data){
			return data;
		});
	}

}]);
