'use strict';

describe('Controller: JustAngularCtrl', function () {

  // load the controller's module
  beforeEach(module('angularOneApp'));

  var JustAngularCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JustAngularCtrl = $controller('JustAngularCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(scope.title.length).toEqual(5);
  });
});
