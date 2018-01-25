(function() {
    'use strict';
  
    function cocktailSearch($http,searchConfig) {
        var service = {};

    	service.cocktailList = [];
    	service.cocktailDetail = {};
    	service.getCockails = getCockails;
    	service.getCockailDetails = getCockailDetails;
    	service.searchConfig = searchConfig;
    	service.cocktailId = searchConfig.cocktailId;
    	function getCockails(){

            return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+service.searchConfig.ingredient)
            .then(function(response){
                service.cocktailList = response.data.drinks;
            })
            .catch(function(error){
                service.cocktailList = [];
            });
        }

        function getCockailDetails(cocktailId){

            return $http.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+cocktailId)
            .then(function(response){
                service.cocktailDetail = response.data.drinks[0];
            })
            .catch(function(error){
                service.cocktailDetail = {};
            });
        }
        return service;
    }

    cocktailSearch.$inject = ['$http','searchConfig'];
    
    angular.module('daproject')
        .factory('cocktailSearch', cocktailSearch);
  
})();