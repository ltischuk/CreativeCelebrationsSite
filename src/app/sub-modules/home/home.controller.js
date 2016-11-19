/**
 * Created by ltischuk on 10/15/16.
 */
(function() {
  'use strict';
  
  angular
    .module('home')
    .controller('HomeController', HomeController);
  
  /** @ngInject */
  function HomeController($scope) {
    var vm = this;
    
  
    $scope.active = 0;
    vm.carouselInterval = 4000;
    vm.slides = [
      
      {
        
        image: '../../../../assets/images/CCImg1.jpg',
        subtitle: 'Unique Decor for your Unforgettable Celebration',
        id: 0
        
      },
      {
    
        image: '../../../../assets/images/wedding_decor2.jpg',
        subtitle: 'Rentals & Full Service Decor',
        id: 1
    
      },
      {
    
        image: '../../../../assets/images/canopy.jpg',
        subtitle: 'Leave a Lasting Impression',
        id: 2
    
      }
      
    ]
    
    activate();
    
    function activate() {
      
    }

  }
})();