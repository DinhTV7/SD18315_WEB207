let myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
    $routeProvider
        .when(
            '/list-student',
            {
                templateUrl: 'view/liststudent.html',
                controller: ListStudentController
            }
        )
        .otherwise(
            {
                redirectTo: '/list-student'
            }
        )
})