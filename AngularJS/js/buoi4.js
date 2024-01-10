// Khởi tạo module
// Set angularjs cho vùng DinhTV7DZ
let dinhDZ = angular.module('DinhTV7DZ', []);
// 2 tham số: tên của vùng ng-app, thành phần phụ thuộc

// Định nghĩa vùng controller
dinhDZ.controller('myController', myController);
// 2 tham số: tên của vùng controller, hàm muốn trỏ đến

function myController($scope) {
    // $scope là tham số mặc định 
    // luôn luôn phải có để gender dữ liệu ra view
    $scope.xinchao = "Thầy Định đẹp trai nhất Fpoly";
}

// Định nghĩa 1 vùng controller mới
// Khai báo và in ra thông tin của 3 nym (hoten, ngaychiatay, sdt)
dinhDZ.controller('nymController', function ($scope) {
    $scope.hoTen = "Tạ Văn Định";
    $scope.ngayChiaTay = "10/01/2024";
    $scope.sdt = "0379204876";

    let test = "Hello";
    $scope.test2 = test;

    console.log($scope.hoTen);

    // Mảng đối tượng
    $scope.nymArr = [
        {
            hoTen: "Tạ Văn Định",
            ngayChiaTay: "10/01/2024",
            sdt: "0379204876"
        },
        {
            hoTen: "DinhTV7",
            ngayChiaTay: "10/01/2024",
            sdt: "0379204876"
        },
        {
            hoTen: "DinhDZ",
            ngayChiaTay: "10/01/2024",
            sdt: "0379204876"
        }
    ];
});
