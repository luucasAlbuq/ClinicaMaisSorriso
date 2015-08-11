angular.module('sorrirApp').service('pacienteService',['$http', 
	function pacienteService( $http){
		var self = this;
		
		var JAVASCRIPT_KEY = "RXYzNKK9hXH0NRUGpSHlosk3x5sxbfliUEBhVhxd";
  		var APPLICATION_ID = "qBElNASWfi8xR8WNYt9KiB3rhDnKtUPH18tl9Bbv";
  		var REST_KEY = "wZnKIr63dkughm2orqkU9V73JaBuMZKg4LK4CTGg";

  		var URL_BASE = "https://"+APPLICATION_ID+":javascript-key="+JAVASCRIPT_KEY+"@api.parse.com/1/";
  		var PACIENTE_URL = "/1/classes/Paciente";
  		var URL_COMPLETA_POST_PUT = URL_BASE+PACIENTE_URL;
  		var URL_GET = "https://api.parse.com/1/classes/Paciente";

  		/*HEADERS DE CONSULTA AO PARSE, NÃO MODIFICAR*/
  		var config = {headers:{"Content-Type": "application/json","X-Parse-Application-Id": APPLICATION_ID,
  		"X-Parse-REST-API-Key": REST_KEY}};

  		/* Retorna um paciente de acordo com o id*/
		this.getPaciente = function(id){
			return $http.get(URL_GET+"/"+id, config).then(function(sucess){
				return sucess.data;
			});
		}

		/*Retorna todos os pacientes cadastrados no sistema*/
		this.getAllPacientes = function(){
			return $http.get(URL_GET, config).then(function(sucess){
				return sucess.data;
			});	
		}

		/*Persiste um paciente*/
		this.cadastrarPaciente = function(paciente){
			return $http.post(URL_GET,paciente,config).then(function(data, status, headers, config){
				alert(data);
			}).error(function(data, status, headers, config) {
    			console.log("Ops, ocorreu um erro!");
  			});
		}
	}]);