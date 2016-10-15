/**
 * Created by ltischuk on 10/15/16.
 */
(function() {
  'use strict';
  
  angular
    .module('home')
    .config(routerConfig);
  
  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('main.home', {
        url: '',
        templateUrl: 'app/sub-modules/home/views/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      });

  }
  
})();
