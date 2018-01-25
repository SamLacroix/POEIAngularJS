(function() {
  'use strict';

  function MoreCtrl($location, settingService, meteoService) {
    var vm = this;   
  }

  MoreCtrl.$inject = ['$location','settingService','meteoService'];

  angular.module('daproject')
    .controller('MoreCtrl', MoreCtrl);

})();
