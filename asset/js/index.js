function check(form) {
  if (form.userid.value == "admin" && form.pswrd.value == "admin123") {
    alert("Berhasil login");
    // window.close("index.html");
    window.open("dashboard.html");
  } else if (form.userid.value.trim() === "" || form.pswrd.value.trim() === "") {
    alert("Error: Username atau Password harus diisi.");
  } else {
    alert("Error: Username atau Password salah.");
  }
}
