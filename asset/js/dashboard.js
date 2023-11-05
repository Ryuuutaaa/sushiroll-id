window.onload = function () {
  // Menutup halaman "index"
  window.opener.close();
  // alert("Berhasil login");
};

var logoutButton = document.getElementById("btn-logout");

logoutButton.addEventListener("click", function () {
  var confirmLogout = confirm("Apakah Anda yakin ingin logout?");

  if (confirmLogout) {
    window.location.href = "index.html";
  } else {
  }
});

// const alertPlaceholder = document.getElementById("i");
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement("div");
//   wrapper.innerHTML = [`<div class="alert alert-${type} alert-dismissible" role="alert">`, `   <div>${message}</div>`, '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', "</div>"].join("");

//   alertPlaceholder.append(wrapper);
// };

// const alertTrigger = document.getElementById("liveAlertBtn");
// if (alertTrigger) {
//   alertTrigger.addEventListener("click", () => {
//     appendAlert("Nice, you triggered this alert message!", "success");
//   });
// }
