(function() {
  'use strict';
	
	angular.module('daproject')
    .directive('cocktail', function() {
      return {
        templateUrl: 'src/components/cocktail/cocktail.html',
        restrict: 'E',
        priority : 'cocktailElement';
        bindToController: {
        },
	scope: {},
        controller: 'cocktail.controller',
        controllerAs: 'ma'
      };
    });

})();