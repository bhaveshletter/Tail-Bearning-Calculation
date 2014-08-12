'use strict';
 
describe('HelloNgCtrl', function(){
    var scope;//we'll use these in our tests
 
    //mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('helloNgApp'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){ 
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('HelloNgCtrl', {$scope: scope});
    }));

    // tests start here
    it('should have variable greet = "Hello AngularJS"', function(){
        expect(scope.greet).toBe('Hello AngularJS');
    });

});
