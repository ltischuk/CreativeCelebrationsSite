(function() {
  'use strict';
  
  angular
    .module('services')
    .config(routerConfig);
  
  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('main.services', {
        url: 'services',
        templateUrl: 'app/sub-modules/services/views/services.html',
        controller: 'ServicesController',
        controllerAs: 'vm'
      });
    
  }
  
})();