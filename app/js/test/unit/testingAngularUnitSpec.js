describe('Testing AngularJS Test Suite', function(){
    describe('Testing AngularJS Controller', function(){
        
        it('should initialize the title in the scope', function(){
            module('testingApp');
            
            var scope = {};
            var ctrl;
            
            inject(function($controller){
               ctrl = $controller('aviCtrl', {$scope:scope});
            });
            
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("Testing AngularJS Applications.");
        })
        
    });
});