var app = angular.module('hod.proving', [
  'ui.router',
  'ngAria',
  'hod.generictool',
  'hod.forms',
  'hod.io',
  'hod.availability'
]);


app.constant('CONFIG', {
  api: '/incomeproving/v1/'
});


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/generictool');

  $stateProvider.state({
    name: 'default',
    title: 'HOD',
    views: {
      'content': {
      },
    },
  });
}]);


app.run(['$location', '$rootScope', '$window', '$timeout', 'AvailabilityService', function($location, $rootScope, $window, $timeout, AvailabilityService) {
  // see http://simplyaccessible.com/article/spangular-accessibility/

  AvailabilityService.setURL('availability');

  $rootScope.$on('$viewContentLoaded', function () {
    // http://stackoverflow.com/questions/25596399/set-element-focus-in-angular-way

    // http://www.accessiq.org/news/features/2013/03/aria-and-accessibility-adding-focus-to-any-html-element



    $timeout(function() {
      var e = angular.element(document.querySelector('#pageTitle'));
      if (e[0]) {
        e[0].focus();
      }
    });

  });
}]);


