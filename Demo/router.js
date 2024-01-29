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
        .when(
            '/detail-student/:id',
            {
                templateUrl: 'view/detailstudent.html',
                controller: DetailStudentController
            }
        )
        .when(
            '/update-student/:id',
            {
                templateUrl: 'view/updatestudent.html',
                controller: UpdateStudentController
            }
        )
        .otherwise(
            {
                redirectTo: '/list-student'
            }
        )
})