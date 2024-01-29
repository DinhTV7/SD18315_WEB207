window.ListStudentController = function ($scope, $http) {
    $scope.title = "Danh sách sinh viên";

    // Thực hiện việc call api
    // Để call api ta cần thêm tham số $http (Giao thức để call api)

    const apiStudent = 'http://localhost:3000/student';

    // Sử dụng giao thức $http.phương thức truy cập HTTP
    $http.get(apiStudent).then(function (response) {
        // Nếu api đúng thì nó sẽ trả về 1 đối tượng nằm trong response
        console.log(response);
        console.log(response.data);
        if (response.status == 200) {
            $scope.listStudent = response.data;
        }
    })

    $scope.deleteStudent = function (deleteID) {
        let confirm = window.confirm("Bạn có muốn xóa không ?");
        if (confirm) {
            $http.delete(
                `${apiStudent}/${deleteID}`
            ).then(function (response) {
                if (response.status == 200) {
                    alert("Xóa dữ liệu thành công");
                }
            });
        }
    }
}