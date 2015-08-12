'use strict';
angular.module("sorrirApp").config(['$routeProvider',function($routeProvider){
	$routeProvider.when("/pacientes",{
		templateUrl : "view/pacientes.html",
		controller : "pacienteCtrl"
	});

	$routeProvider.when("/cadastroPaciente",{
		templateUrl : "view/cadastroPacientes.html",
		controller : "pacienteCtrl"
	});

	$routeProvider.when("/resumo",{
		templateUrl:"view/resumo.html",
		controller:"pacienteCtrl"
	});

	$routeProvider.otherwise({redirectTo: "/pacientes"});

}]);