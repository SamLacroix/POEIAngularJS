(function() {
  'use strict';

  function FinalCtrl($location,searchConfig,cocktailSearch) {
    var vm = this; 
    vm.searchConfig = searchConfig;
    vm.cocktailSearch = cocktailSearch;
    vm.text = ''; 
    vm.afficherIngredient = afficherIngredient;
	
    function afficherIngredient(){
    	vm.searchConfig.ingredient = vm.text;
    	vm.cocktailSearch.getCockails();
    	

    }
  }

  FinalCtrl.$inject = ['$location','searchConfig','cocktailSearch'];

  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();
