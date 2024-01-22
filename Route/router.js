let myApp = angular.module('myApp', ['ngRoute']);
// ngRoute: cung cấp các tính năng định tuyến (routing)
// dùng để quản lý việc điều hướng
myApp.config(function ($routeProvider) {
    // config() cấu hình tham số trước khi chạy ứng dụng
    // $routeProvider là tham số mặc định khô thể thay đổi tên
    // Dùng để định nghĩa ra các route
    $routeProvider
        .when(
            '/trang-chu', // Tên route
            {
                templateUrl: 'view/trangchu.html', // Đường dẫn đến view
                controller: TrangChuController // tên controller cần map đến view
            }
        )
        .when(
            '/gioi-thieu/:id/:name/:des', // Tên route
            {
                templateUrl: 'view/gioithieu.html', // Đường dẫn đến view
                controller: GioiThieuController
            }
        )
        .otherwise({
            // Trong trường hợp người dùng truy cập
            // 1 route ko đc định nghĩa
            // nó sẽ tự động chuyển vào route này
            redirectTo: '/trang-chu'
        })
})