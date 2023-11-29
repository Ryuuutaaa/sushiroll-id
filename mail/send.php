<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if(isset($_POST["send"])){
  $email = $_POST["email"];
  if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo "<script>alert('Error: Masukkan alamat email yang valid.'); window.location.href = 'index.php';</script>";
      exit(); // Hentikan eksekusi jika email tidak valid
  }

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = 'emailcather404@gmail.com';
    $mail->Password = 'qnamxtlwwzzwlqvc';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('emailcather404@gmail.com');

    $mail->addAddress($_POST["email"]);

    $mail->isHTML(true);

    $mail->Subject = "Voucher Diskon Belanja untuk Maid Caffe Bali!";

    $emailContent = <<<EOT
    Halo, {$_POST["nama"]}

    Kabar baik! Kamu memiliki kesempatan untuk mendapatkan voucher diskon spesial untuk belanja di Maid Caffe Bali!

    Dapatkan pengalaman istimewa dengan berbagai pilihan menu lezat dan suasana yang menyenangkan di Maid Caffe Bali. 
    Gunakan kode diskon kami saat pembayaran untuk menikmati potongan harga yang kami sediakan khusus untukmu.

    Tunggu apa lagi? Segera manfaatkan kesempatan ini untuk merasakan momen istimewa di Maid Caffe Bali!

    Salam hangat,
    Maid Caffe Bali
    EOT;

    $mail->Body = "<pre>" . $emailContent . "</pre>";

    $mail->send();

    echo 
    "<script>
    alert('email terkirim');
    document.location.href = '../quiz/index.html';
  </script>";
}

