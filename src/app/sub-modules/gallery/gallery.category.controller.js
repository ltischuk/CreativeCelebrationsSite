/**
 * Created by ltischuk on 11/20/16.
 */
(function() {
  'use strict';
  
  angular
    .module('gallery')
    .controller('GalleryCategoryController', GalleryCategoryController);
  
  /** @ngInject */
  function GalleryCategoryController($uibModal,$state,GalleryImgService) {
    var vm = this;
    
    vm.categoryImgs = GalleryImgService.getCategoryObjects();
    
    vm.goToGalleryForCategory = function(category){
  
      $state.go('main.gallery-images',{category:category});
      
    }

    
    function activate() {
      
    }
    
    
    
    activate();
  }
})();
