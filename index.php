<?php
$messages = file_exists('messages.txt') ? file('messages.txt') : [];
?>
<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selamat Hari Lahir!</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="container">
        <h1><i class="fas fa-gift"></i> Selamat Hari Lahir, NUR ERISYAA KHAYRRA BINTI NASIR ! <i class="fas fa-gift"></i></h1>
        <p>Hari ini adalah hari istimewa untuk anda!</p>
        <div class="message">
            <h2><i class="fas fa-heart"></i> Pesanan Khas:</h2>
            <p>Semoga hari anda dipenuhi dengan kebahagiaan dan kejayaan. Selamat hari lahir!</p>
        </div>
        <div class="form">
            <form id="birthdayMessageForm">

        <div class="gallery">
            <h2><i class="fas fa-camera"></i> Galeri Kenangan</h2>
            <div id="gallery"></div>
        </div>
        <div class="saved-messages">
            <h2><i class="fas fa-comments"></i> Mesej Dihantar</h2>
            <?php if ($messages): ?>
                <ul>
                    <?php foreach ($messages as $message): ?>
                        <li><?php echo htmlspecialchars($message, ENT_QUOTES, 'UTF-8'); ?></li>
                    <?php endforeach; ?>
                </ul>
            <?php else: ?>
                <p>Tiada mesej yang dihantar lagi.</p>
            <?php endif; ?>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
