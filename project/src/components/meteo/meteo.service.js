(function() {
    'use strict';
  
    function meteoService(settingService, $http) {
        var service = {};

    	service.meteoListe = [];
        service.settingService = settingService;
        service.getMeteo = getMeteo;
        
	    function getMeteo(){

            return $http.get('http://api.openweathermap.org/data/2.5/forecast?q='+service.settingService.city+'&APPID=d1b6ad1a369485a44c0e5de7752c72b8&units=metric')
            .then(function(response){
                service.meteoListe = response.data.list;
            })
            .catch(function(error){
                service.meteoListe = [];
            });
        }

        return service;
    }

    meteoService.$inject = ['settingService','$http'];
    
    angular.module('daproject')
        .factory('meteoService', meteoService);
  
})();