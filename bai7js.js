function kiemTra() {
    var sdt = document.getElementById("sdt").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var repass = document.getElementById("repass").value;
    var user = document.getElementById("username").value;

    if (user === "" || pass === "" || repass === "") {
      alert("Tên đăng nhập và mật khẩu không được để trống.");
      return false;
    }

    if (pass !== repass) {
      alert("Mật khẩu nhập lại không đúng.");
      return false;
    }

    if (isNaN(sdt)) {
      alert("Số điện thoại phải là số.");
      return false;
    }
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      alert("Email không hợp lệ.");
      return false;
    }

    alert("Đăng ký thành công!");
    return true;
  }