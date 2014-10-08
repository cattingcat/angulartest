app = angular.module('defaultApp', [
    'ngRoute'
]);

app
    .controller('ctrl', ctrl)
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/test', {
            templateUrl: '/Scripts/Default/views/test.tpl.html',
            controller: testCtrl
        });
    });