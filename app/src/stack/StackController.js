(function(){

  angular
       .module('users')
       .controller('UserController', [
          'userService', 'stackService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
          UserController
       ]);

       /**
        * Main Controller for the Angular Material Starter App
        * @param $scope
        * @param $mdSidenav
        * @param avatarsService
        * @constructor
        */
       function StackController( stackService, userService, $mdSidenav, $mdBottomSheet, $timeout, $log ) {
         var self = this;

         self.selected     = null;
         self.stacks        = [ ];
         self.selectUser   = selectUser;

         stackService
                .loadAllStacks()
                .then( function( stacks ){
                  self.stacks = [].concat(stacks);
                  self.selected= stacks[0];
                })
      }
})
