var app = angular.module('myApp', ['ngRoute']);


app.config(['$httpProvider','$routeProvider', function ($httpProvider,$routeProvider) {
    $httpProvider.defaults.useXDomain = true;

    $routeProvider
    .when("/", {
        templateUrl : "/static/main.html"
    })
    .when("/red", {
        templateUrl : "/static/red.html"
    })
    .when("/register", {
        templateUrl : "/static/register.html"
    })
    .when("/about", {
        templateUrl : "/about.html"
    });

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

