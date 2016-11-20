/**
 * Created by ltischuk on 11/20/16.
 */
/**
 * Created by ltischuk on 10/15/16.
 */
(function() {
  'use strict';
  
  angular
    .module('gallery')
    .config(routerConfig);
  
  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('main.gallery', {
        url: 'gallery',
        templateUrl: 'app/sub-modules/gallery/views/gallery.html',
        controller: 'GalleryController',
        controllerAs: 'vm'
      });
    
  }
  
})();
