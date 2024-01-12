// Khởi tạo 1 vùng AngularJS
// Khai báo 1 controller mới
// Khai báo 1 mảng dữ liệu nhanVien
// (ten, ngaySinh, luong, gioiTinh (0: Nam, 1: Nữ))
// Sử dụng AngularJS để hiển thị toàn bộ
// dữ liệu của nhanVien ra view dưới dạng table
// table có sử dụng Bootstrap
// "20/11/2004"
// new Date("năm-tháng-ngày")

let myApp = angular.module('myApp', []);

myApp.controller('employeeController', function ($scope) {
    $scope.title = "Danh sách nhân viên";
    $scope.employees = [
        {
            hoTen: "Nguyễn Văn A",
            ngaySinh: new Date("2004-11-20"),
            luong: 100000000,
            gioiTinh: 0,
        },
        {
            hoTen: "Nguyễn Thị B",
            ngaySinh: new Date("2004-12-22"),
            luong: 50000000,
            gioiTinh: 1,
        }
    ]

    // Làm việc với ng-model
    $scope.xinchao = "Chào mừng các bạn";
});

