window.onload = function () {
  // Menutup halaman "index"
  window.opener.close();
  // alert("Berhasil login");
};

var logoutButton = document.getElementById("btn-logout");

logoutButton.addEventListener("click", function () {
  var confirmLogout = confirm("Apakah Anda yakin ingin logout?");

  if (confirmLogout) {
    window.location.replace("index.html");
  }
});
