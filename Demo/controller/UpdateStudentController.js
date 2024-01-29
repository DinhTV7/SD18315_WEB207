window.UpdateStudentController = function ($scope, $http, $routeParams, $location) {
    $scope.title = "Chỉnh sửa thông tin sinh viên"

    const apiStudent = 'http://localhost:3000/student';

    let studentID = $routeParams.id;

    $http.get(
        `${apiStudent}/${studentID}`
    ).then(function (response) {
        console.log(response.data.ngaySinh);
        if (response.status == 200) {
            $scope.inputValue = {
                hoTen: response.data.hoTen,
                email: response.data.email,
                ngaySinh: new Date(response.data.ngaySinh),
            }
        }
    });

    $scope.updateStudent = function () {
        let updateStudent = {
            hoTen: $scope.inputValue.hoTen,
            email: $scope.inputValue.email,
            ngaySinh: $scope.inputValue.ngaySinh,
        }

        // console.log(updateStudent);

        $http.put(
            `${apiStudent}/${studentID}`,
            updateStudent
        ).then(function (response) {
            // console.log(response);
            if (response.status == 200) {
                alert("Chỉnh sửa thành công");
                $location.path('/list-student');
            }
        });
    }
}