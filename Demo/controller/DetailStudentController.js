window.DetailStudentController = function ($scope, $routeParams, $http) {
    $scope.title = "Chi tiết sinh viên";

    // console.log($routeParams.id);

    const apiStudent = 'http://localhost:3000/student';

    let studentID = $routeParams.id;

    $http.get(
        `${apiStudent}/${studentID}`
    ).then(function (response) {
        console.log(response.data.ngaySinh);
        if (response.status == 200) {
            $scope.inputValue = {
                id: response.data.id,
                hoTen: response.data.hoTen,
                email: response.data.email,
                ngaySinh: new Date(response.data.ngaySinh),
            }
        }
    });

}