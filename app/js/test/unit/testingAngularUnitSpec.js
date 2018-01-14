describe('Testing AngularJS Test Suite', function(){

    beforeEach(module('testingApp'));

    describe('Testing AngularJS Controller', function(){
        var scope, ctrl;
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('aviCtrl', { $scope: scope });
        }));

        afterEach(function(){
            // Cleanup Code
        });

        it('should initialize the title in the scope', function(){
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("Testing AngularJS Applications.");
        })
        
    });
});