var eventScraper = angular.module('eventScraper', ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/list');

    $stateProvider
      .state('list', {
        url: '/list',
        templateUrl: 'views/list.html'
      })
      .state('grid', {
        url: '/grid',
        templateUrl: 'views/grid.html'
      });
  })

;
