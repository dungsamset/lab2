// Lấy giá trị từ người dùng
alert ("Chao Ban Den Voi Chuong Trinh Tinh Toan");
var a = parseFloat(prompt("Nhập giá trị cạnh a:"));
var b = parseFloat(prompt("Nhập giá trị cạnh b:"));

// Áp dụng định lý Pythagorean
var c = Math.sqrt(a**2 + b**2);

// Hiển thị kết quả
alert ("Cạnh huyền của tam giác là: " + c);
// console.log("Cạnh huyền của tam giác là: " + c);