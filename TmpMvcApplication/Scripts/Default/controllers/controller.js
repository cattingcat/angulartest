
function ctrl($scope) {
    console.log('main ctrl runned');

    $scope.message = 'msg';
    $scope.init = function (obj) {
        console.log('trying to get child scope');
        console.log(obj);
    }
}

function testCtrl($scope) {
    console.log('test ctrl runned');
    $scope.message = 'child msg';
    $scope.items = [
        { a: 11, b: 'b1' },
        { a: 12, b: 'b2' },
        { a: 13, b: 'b3' }];
}