(function() {
  'use strict';

  angular
    .module('ccsite')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment,$state) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
  
      /**
       * Is the nav bar item active
       * @param stateName
       * @returns {boolean}
       */
      vm.isNavItemActive = function(stateName){
        
        return $state.current.name === stateName;
        
      }
    }
  }

})();
