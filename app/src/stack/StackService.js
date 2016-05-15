(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function StackService($q){
    var stackLogo =
      {
        javascript : './assets/stack/javascript.png',
        angular : './assets/stack/angular.png',
        backbone : './assets/stack/backbone.png',
        html5 : './assets/stack/html5.png',
        css : './assets/stack/css3.png',
        java : './assets/svg/java.png',
        rubyonrails : './assets/stack/ruby-on-rails.png'
      };

    // Promise-based API
    return {
      loadAllStacks : function() {
        // Simulate async nature of real remote calls
        return $q.when(stackLogo)
      }
    };
  }
})
