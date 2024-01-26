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
        .when(
            '/add-student',
            {
                templateUrl: 'view/addstudent.html',
                controller: AddStudentController
            }
        )
        .otherwise(
            {
                redirectTo: '/list-student'
            }
        )
})