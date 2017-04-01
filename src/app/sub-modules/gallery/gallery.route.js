/**
 * Created by ltischuk on 11/20/16.
 */
(function() {
  'use strict';
  
  angular
    .module('gallery')
    .config(routerConfig);
  
  /** @ngInject */
  function routerConfig($stateProvider) {
    
    $stateProvider
      .state('main.gallery-category', {
        url: 'gallery-category',
        templateUrl: 'app/sub-modules/gallery/views/category.html',
        controller: 'GalleryCategoryController',
        controllerAs: 'vm'
      })
    $stateProvider
      .state('main.gallery-images', {
        url: 'gallery-images/:category',
        templateUrl: 'app/sub-modules/gallery/views/gallery.html',
        controller: 'GalleryImagesController',
        controllerAs: 'vm'
      });
    
  }
  
})();
