'use strict';

angular.module('angularOneApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('justAngular', {
        url: '/justAngular',
        templateUrl: 'app/justAngular/justAngular.html',
        controller: 'JustAngularCtrl'
      });
  });