/**
 * Created by ltischuk on 10/15/16.
 */
(function() {
  'use strict';
  
  angular
    .module('home')
    .controller('HomeController', HomeController);
  
  /** @ngInject */
  function HomeController() {
    var vm = this;
  
    vm.carouselInterval = 4000;
    vm.slides = [
      
      {
        
        image: '../../../../assets/images/CCImg1.jpg',
        subtitle: 'Unique Decor for your Unforgettable Celebration'
        
      },
      {
    
        image: '../../../../assets/images/wedding_decor.jpg',
        subtitle: 'Rentals & Full Service Decor'
    
      },
      {
    
        image: '../../../../assets/images/canopy.jpg',
        subtitle: 'Leave a Lasting Impression'
    
      }
      
    ]
    
    activate();
    
    function activate() {
      
    }

  }
})();