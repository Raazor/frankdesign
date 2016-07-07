'use strict';

/**
 * @ngdoc overview
 * @name frankdesignApp
 * @description
 * # frankdesignApp
 *
 * Main module of the application.
 */
angular
  .module('frankdesignApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
