/**
 * Created by ltischuk on 10/15/16.
 */
(function() {
  'use strict';
  
  angular
    .module('contact')
    .controller('ContactController', ContactController);
  
  /** @ngInject */
  function ContactController($scope,$uibModal,ContactService) {
    var vm = this;
    vm.firstName = '';
    vm.lastName = '';
    vm.email = '';
    vm.phone = '';
    vm.eventMessage = '';
    vm.submitted = false;
    
    vm.submitMessage = function(){
      
      vm.submitted = true;
      if($scope.contactForm.$valid){
  
        ContactService.sendMessage(formulateMessage())
          .then(onSendMessageSuccess)
          .catch(onSendMessageFailure);
        
      }
      
    }
    
    function formulateMessage(){
      
      return {
        email: vm.email,
        subject: 'Website Inquiry',
        message: 'Name: ' + vm.firstName + ' ' + vm.lastName + '\r\n' +
                 'Email: ' + vm.email + '\r\n' +
                 'Phone: ' + vm.phone + '\r\n' +
                 'Event Details '+ vm.eventMessage
            
  
      }
      
    }
    
    function onSendMessageSuccess(){
  
      $uibModal.open({
        templateUrl: 'app/sub-modules/contact/views/contact-result-modal.html',
        backdrop: true,
        windowClass: 'modal',
        controller: function ($scope, $uibModalInstance) {
          $scope.sendMessageResultTitle = 'Success';
          $scope.sendMessageResultMsg = "Thank you for your message! <br> We will reach out to you shortly to help you with your event.";
          $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };
        }
      });
      
    }
  
    function onSendMessageFailure(){
    
      $uibModal.open({
        templateUrl: 'app/sub-modules/contact/views/contact-result-modal.html',
        backdrop: true,
        windowClass: 'modal',
        controller: function ($scope, $uibModalInstance) {
          $scope.sendMessageResultTitle = 'Message Error';
          $scope.sendMessageResultMsg = "We are sorry but there was an issue sending your message. <br> Please try again or call us directly at 407-960-3438";
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
