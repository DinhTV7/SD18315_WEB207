window.GioiThieuController = function ($scope, $routeParams) {
    console.log($routeParams.id);
    console.log($routeParams.name);
    console.log($routeParams.des);

    // Bài 1: Tạo 1 form nhập vào 2 số, 1 button
    // Tính tổng 2 số truyền và hiển thị ra màn hình
    

    // Bài 2: Tạo 1 form đăng nhập
    // Nếu tài khoản = dinhtv7
    // mật khẩu = 12345678
    // hiển thị alert (Chào mừng + tên đăng nhập)
    // nếu nhâp sai thì hiển thị thông báo đỏ 
    // bên dưới ô input
    $scope.dangNhap = function () {
        let tenDangNhap = $scope.inputValue.tenDangNhap;
        let matKhau = $scope.inputValue.matKhau;
        $scope.error = {};

        if (tenDangNhap == "DinhTV7") {
            $scope.error.tenDangNhap = "";
        } else {
            $scope.error.tenDangNhap = "Sai tên đăng nhập";
        }

        if (matKhau == "12345678") {
            $scope.error.matKhau = "";
        } else {
            $scope.error.matKhau = "Sai mật khẩu";
        }

        if (tenDangNhap == "DinhTV7" && matKhau == "12345678") {
            alert("Xin chào " + tenDangNhap);
        }
    }
}