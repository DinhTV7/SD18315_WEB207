window.AddStudentController = function ($scope, $http, $location) {
    $scope.title = "Thêm sinh viên mới";

    $scope.createStudent = function () {
        const apiStudent = 'http://localhost:3000/student';

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
            let newStudent = {
                hoTen: $scope.inputValue.hoTen,
                email: $scope.inputValue.email,
                ngaySinh: $scope.inputValue.ngaySinh,
            }
            // console.log(newStudent);

            $http.post(
                apiStudent, // Đường dẫn API
                newStudent  // Dữ liệu mới nhập vào từ input
            ).then(function (response) {
                // console.log(response);
                // alert(123);
                if (response.status == 201) {
                    alert("Thêm dữ liệu thành công!");
                    // Quay trở lại trang danh sách
                    $location.path('#!/list-student');
                }
            });
        }
    }
}