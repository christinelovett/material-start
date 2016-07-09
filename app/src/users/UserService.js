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
  function UserService($q){

    var users = [
      {
        name: 'Christine Lovett',
        avatar: './assets/svg/headshot.png',
        content: 'Passionate developer who is driven to solve problems with creativity and diligence. Full stack experience- takes a liking to dynamic front end work.',
        github: 'http://github.com/christinelovett'
      },
      {
        name: 'Tred Tracker',
        avatar: './assets/svg/trek.png',
        content: 'Tred Tracker is an application for bike riders. Use the application to keep track of your long weekend rides and continue raising the bar on your mileage while you discover new places.',
        github: 'http://github.com/christinelovett/tred',
        screenshot: './assets/stack/tred.png'
      },
      {
        name: 'Start Me Up',
        avatar: './assets/svg/startmeup.png',
        content: 'Start Me Up is an easy-to-use comparison application. The basis of the project is creating a space to do quick comparisons of companies simlilar to your own. Stack up the competiion to see where you stand out and where you need to step up. I plan to integrate D3 data visualization to make the application more immediately impactful.',
        github: 'http://github.com/christinelovett/start_me_up'
      },
      {
        name: 'Wanderlist',
        avatar: './assets/svg/wanderlist.png',
        content: 'The WanderList is an interactive pinboard where users can share their adventures and desired trips. Users can drop red pins for places that they want to go and green pins for the places that they have been. Clicking on a pin opens a sidebar where details about the users trips can be added, including photos and notes.',
        github: 'https://github.com/alexbannon/wanderlist',
        screenshot: './assets/stack/WL.png'
      },
      {
        name: 'Local Table',
        avatar: './assets/svg/chair.png',
        content: 'I found there was a need for an application that connects furniture makers with buyers from their community. While it can be fun to drive out to the country and search for unique pieces, makers and buyers both benefit from finding one another through Local Table.',
        github: 'https://github.com/christinelovett/local_table',
        screenshot: './assets/stack/LT.png'
      },
      {
        name: 'Jeopardy!',
        avatar: './assets/svg/alek.png',
        content: 'Jeopardy! is an American television game show created by Merv Griffin. The show features a quiz competition in which contestants are presented with general knowledge clues in the form of answers, and must phrase their responses in the form of questions. Here, play it online.',
        github: 'https://github.com/christinelovett/jeopardy'
      }
    ];




    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users)
      }

    };
  }

})();
