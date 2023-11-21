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
      console.log("kamu benar", jawabanBenar);
    } else if (jawabanBenar === 2) {
      console.log("kamu benar", jawabanBenar);
    } else if (jawabanBenar === 3) {
      console.log("kamu benar", jawabanBenar);
    } else if (jawabanBenar === 4) {
      console.log("kamu benar", jawabanBenar);
    } else if (jawabanBenar === 5) {
      console.log("kamu benar", jawabanBenar);
    }
  }
}

acakGambar(); // Pilih gambar acak saat halaman dimuat
