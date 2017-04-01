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
    $stateProvider
      .state('main.event-design-decor', {
        url: 'event-design-decor',
        templateUrl: 'app/sub-modules/services/views/event-design-decor.html',
        controller: 'ServicesController',
        controllerAs: 'vm'
      });
    $stateProvider
      .state('main.rentals-and-signage', {
        url: 'rentals-and-custom-signage',
        templateUrl: 'app/sub-modules/services/views/rentals-signage.html',
        controller: 'ServicesController',
        controllerAs: 'vm'
      });
   
    
  }
  
})();
