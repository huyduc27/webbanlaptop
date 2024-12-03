document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn form tự động gửi đi

  // Lấy giá trị từ input
  const username = document.getElementById("username").value.trim();

  if (username) {
      // Lưu tên tài khoản vào localStorage để sử dụng trên trang khác
      localStorage.setItem("username", username);

      // Hiển thị thông báo thành công (nếu cần)
      alert("Đăng nhập thành công!");

      // Chuyển hướng về trang index.html
      window.location.href = "index1.html";
  } else {
      alert("Vui lòng nhập tên tài khoản!");
  }
});
