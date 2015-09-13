'use strict';

describe('Controller: JqueryCtrl', function () {

  // load the controller's module
  beforeEach(module('angularOneApp'));

  var JqueryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JqueryCtrl = $controller('JqueryCtrl', {
      $scope: scope
    });
  }));

  it('should return the square root of number 9', function () {
    // squareRoot(9) = 3
    var res = scope.result(9);
    expect(3).toEqual(res);
  });
});

