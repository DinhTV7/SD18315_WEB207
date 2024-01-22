window.TrangChuController = function($scope) {
    $scope.title = "Thầy Định đẹp trai";

    // Tạo 1 form nhập vào 2 số, và 1 button
    // Sau khi nhấn submit thì sẽ tính tổng 2 số 
    // và hiển thị ra màn hình
    $scope.tinhTong = function () {
        console.log($scope.inputValue);
        let num1 = parseFloat($scope.inputValue.number1);
        let num2 = parseFloat($scope.inputValue.number2);
        $scope.ketqua = num1 + num2;
    }
}