window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Tebak Gambar
const pathFolder = "asset/img/";
const listGambar = [
  "azuki.jpg",
  "chocola.jpg",
  "kokonat.jpg",
  "maple.jpg",
  "shigure.jpg",
  "vanilla.jpg" /* ... add more images */,
];

const gambarTebak = document.getElementById("gambarTebak");
const tebakanInput = document.getElementById("tebakan");
const kesempatanPesan = document.getElementById("kesempatan");
const hasilPesan = document.getElementById("hasil");

let sisaKesempatan = 5;
let jawabanBenar = 0;

function acakGambar() {
  const gambarTerpilih =
    listGambar[Math.floor(Math.random() * listGambar.length)];
  document.getElementById("gambarTebak").src = pathFolder + gambarTerpilih;
}

function cekTebakan() {
  const jawaban = tebakanInput.value.toLowerCase();

  // Tambahkan kondisi jika jawaban kosong
  if (jawaban.trim() === "") {
    hasilPesan.textContent = "Kamu harus menjawab dulu!";
    return; // Hentikan eksekusi fungsi jika jawaban kosong
  }

  if (sisaKesempatan > 0) {
    const namaGambar = gambarTebak.src
      .split("/")
      .pop()
      .split(".")[0]
      .toLowerCase();

    if (jawaban === namaGambar) {
      hasilPesan.textContent = "Selamat, jawaban kamu benar!";
      jawabanBenar++;
      sisaKesempatan--;
      kesempatanPesan.textContent = `Kesempatan: ${sisaKesempatan}`;
      console.log(jawabanBenar);
    } else {
      hasilPesan.textContent = "Maaf, jawaban kamu salah. Coba lagi!";
      sisaKesempatan--;
      kesempatanPesan.textContent = `Kesempatan: ${sisaKesempatan}`;
    }
  } else {
    hasilPesan.textContent =
      "Maaf, kesempatan kamu sudah habis. Silakan mulai kembali.";
  }

  tebakanInput.value = ""; // Reset input setelah tebakan
  acakGambar(); // Pilih gambar acak untuk permainan selanjutnya

  // Periksa apakah permainan selesai
  if (sisaKesempatan === 0) {
    tebakanInput.disabled = true;
    document.querySelector("button").disabled = true;
    if (jawabanBenar === 1) {
      window.location = "benar1.html";
    } else if (jawabanBenar === 2) {
      window.location = "benar2.html";
    } else if (jawabanBenar === 3) {
      window.location = "benar3.html";
    } else if (jawabanBenar === 4) {
      window.location = "benar4.html";
    } else if (jawabanBenar === 5) {
      window.location = "benar5.html";
    } else {
      window.location = "zonk.html";
    }
  }

  if (sisaKesempatan === 0) {
    tebakanInput.disabled = true;
    document.querySelector(".jawaban button").disabled = true;
  }
}

acakGambar(); // Pilih gambar acak saat halaman dimuat
