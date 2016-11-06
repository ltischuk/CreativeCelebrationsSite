/**
 * Created by ltischuk on 10/15/16.
 */
(function() {
  'use strict';
  
  angular
    .module('contact')
    .controller('ContactController', ContactController);
  
  /** @ngInject */
  function ContactController($scope) {
    var vm = this;
    vm.firstName = '';
    vm.lastName = '';
    vm.email = '';
    vm.phone = '';
    vm.eventMessage = '';
    
    vm.submitMessage = function(){
      
      if($scope.contactForm.$valid){
        
        
        
      }
      
    }
    
    
    activate();
    
    function activate() {
      
    }

  }
})();