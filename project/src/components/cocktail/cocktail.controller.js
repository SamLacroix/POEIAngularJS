(function() {
  'use strict';

  function CocktailCtrl($location,searchConfig,cocktailSearch) {
    var vm = this; 
  }

  CocktailCtrl.$inject = ['$location','searchConfig','cocktailSearch'];

  angular.module('daproject')
    .controller('CocktailCtrl', CocktailCtrl);

})();
