// function closeForm() {
//     document.querySelector('.login-overlay').style.display = 'none';
//   }
  
//   document.getElementById('registerForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Tài khoản đã được tạo!');
//     window.location.href = "index.html";
//   });
//   function navigateTo(page) {
//     window.location.href = page;
// }
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn chặn form reload lại trang
  
  // Thu thập dữ liệu từ các trường
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const password = document.getElementById("password").value;

  // Giả lập quá trình đăng ký thành công (bạn có thể thay bằng API gọi server thực tế)
  if (fullname && email && address && password) {
    alert("Đăng ký thành công! Quay lại trang chủ.");
    window.location.href = "index.html"; // Chuyển hướng về trang index
  } else {
    alert("Vui lòng điền đầy đủ thông tin!");
  }
}); 1 