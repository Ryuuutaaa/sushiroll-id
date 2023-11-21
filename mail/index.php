<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hadiah</title>
    <link rel="stylesheet" href="asset/style.css">
  </head>
  <body>
    <h2>Ambil hadiah anda!!!</h2>
    <form action="send.php" method="post">
      <label for="email">masuka email anda untuk menerima voucher:</label><br />
      <input type="email" name="email" id="email" /><br /><br />
      <button type="submit" name="send">Send</button>
    </form>
  </body>
</html>