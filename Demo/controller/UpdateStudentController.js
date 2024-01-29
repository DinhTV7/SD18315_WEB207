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
        // Tạo 1 biến để kiểm tra
        let flag = true;

        // Tạo biến để bật tắt lỗi
        $scope.kiemTra = {
            hoTen: false,
            email: false,
            ngaySinh: false
        }

        // Check trống
        if (!$scope.inputValue || !$scope.inputValue.hoTen) {
            flag = false;
            $scope.kiemTra.hoTen = true;
        }
        if (!$scope.inputValue || !$scope.inputValue.email) {
            flag = false;
            $scope.kiemTra.email = true;
        }
        if (!$scope.inputValue || !$scope.inputValue.ngaySinh) {
            flag = false;
            $scope.kiemTra.ngaySinh = true;
        }

        // Check email
        let regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regexEmail.test($scope.inputValue.email)) {
            flag = false;
            $scope.kiemTra.email = true;
        }
        
        if (flag) {
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
}