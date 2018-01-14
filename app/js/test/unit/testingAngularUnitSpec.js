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

        it('should add two destinations to the destination list', function() {
            expect(scope.destinations).toBeDefined();
            expect(scope.destinations.length).toBe(0);
            scope.newDestination = {
                city: "London",
                country: "England"
            }
            
            scope.addDestination();
            
            expect(scope.destinations.length).toBe(1);
            expect(scope.destinations[0].city).toBe("London");
            expect(scope.destinations[0].country).toBe("England");
            
            scope.newDestination.city = "Frankfurt";
            scope.newDestination.country = "Germany";
            
            scope.addDestination();
            
             expect(scope.destinations.length).toBe(2);
            expect(scope.destinations[1].city).toBe("Frankfurt");
            expect(scope.destinations[1].country).toBe("Germany");
        })
        
    });
});