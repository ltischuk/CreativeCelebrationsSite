/**
 * Created by ltischuk on 2/12/17.
 */
(function() {
  'use strict';
  
  angular
    .module('ccsite')
    .factory('ContactService', ContactService);
  
  /** @ngInject */
  function ContactService($log, $http,$window) {
    var emailApiHost = $window.location.protocol + '//' + $window.location.host + "/php/email.php";
    //var emailApiHost = 'http://creativecelebrationsfl.com/php/email.php';
    
    var service = {
      sendMessage: sendMessage
    };
    
    return service;
    
    function sendMessage(message) {
      
      return $http({
        url:emailApiHost,
        method: "POST",
        data: { 'message' : message },
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
    }
  }
})();
