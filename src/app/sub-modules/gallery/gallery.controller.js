/**
 * Created by ltischuk on 11/20/16.
 */
(function() {
  'use strict';
  
  angular
    .module('gallery')
    .controller('GalleryController', GalleryController);
  
  /** @ngInject */
  function GalleryController($uibModal) {
    var vm = this;
    
    vm.imgs =[
      {
        src:'gallery_wedding_table.jpg',
        description:'Custom Table Decor'
      },
      {
        src: 'gallery_themed_elements1.jpg',
        description:'Custom Display Elements'
      },
      {
        src: 'gallery_themed_elements2.jpg',
        description:'Vintage Small Custom Display'
      },
      {
        src: 'gallery_custom_name.jpg',
        description:'Unique Display Ideas'
      },
      {
        src: 'gallery_guest_gifts.jpg',
        description:'Unique Custom Gift Ideas'
      },
      {
        src: 'gallery_themed_plate.jpg',
        description:'Custom Accents Designed for you'
      },
      {
        src: 'gallery_custom_centerpiece.jpg',
        description:'Custom Centerpieces for your Theme'
      },
      {
        src: 'gallery_themed_elements3.jpg',
        description:'Rustic Custom Display'
      },
      
    ]
    
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
      
    }

    
    function activate() {
      
    }
    
    
    
    activate();
  }
})();