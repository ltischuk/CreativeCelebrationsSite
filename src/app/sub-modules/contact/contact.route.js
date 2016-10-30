/**
 * Created by ltischuk on 10/15/16.
 */
(function() {
  'use strict';
  
  angular
    .module('contact')
    .config(routerConfig);
  
  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('main.contact', {
        url: 'contact',
        templateUrl: 'app/sub-modules/contact/views/contact.html',
        controller: 'ContactController',
        controllerAs: 'vm'
      });

  }
  
})();
