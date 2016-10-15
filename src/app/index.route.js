(function() {
  'use strict';

  angular
    .module('ccsite')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($locationProvider,$stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        abstract: true,
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  
    $locationProvider.html5Mode({enabled: true});
    $urlRouterProvider.otherwise('/');
  }

})();
