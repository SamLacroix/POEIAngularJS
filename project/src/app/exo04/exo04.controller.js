(function() {
  'use strict';

  function Exo04Ctrl($location) {
    var vm = this;

    var text;
    vm.text = text;
    vm.afficherText = afficherText;
    function afficherText(){
      console.log(vm.text);
    }

    function goToExo(exoNumber) {
      if (exoNumber === 3) {
        $location.path('/exo04');
      }
    }
  }

  Exo04Ctrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();
