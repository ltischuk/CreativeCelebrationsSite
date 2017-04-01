/**
 * Created by ltischuk on 11/20/16.
 */
(function() {
  'use strict';
  
  angular
    .module('gallery')
    .controller('GalleryImagesController', GalleryImagesController);
  
  /** @ngInject */
  function GalleryImagesController($uibModal,$stateParams,$state,GalleryImgService) {
    var vm = this;
    
    vm.selectedCategory = $stateParams.category;
    vm.imgs = GalleryImgService.filterImagesForCategory($stateParams.category);
    
    vm.openImg = function(img){
  
      $uibModal.open({
        templateUrl: 'app/sub-modules/gallery/views/gallery-modal.html',
        backdrop: true,
        windowClass: 'modal',
        controller: function ($scope, $uibModalInstance) {
          $scope.img = img;
          $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };
        }
      });
      
    };
    
    vm.returnToCategoryPage = function(){
  
      $state.go('main.gallery-category');
      
    };

    
    function activate() {
      
    }
    
    
    
    activate();
  }
})();
