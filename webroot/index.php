<?php
// Quick test PHP is loading
$title = 'Cool Things!';
?>
<!DOCTYPE html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $title ?></title>
    <link rel="stylesheet" href="dist/index.css">
</head>
<body>
    <main id="app">
        <!-- Test loading data into component props -->
        <nice-title
            :title="<?= htmlspecialchars(json_encode($title)) ?>"
        ></nice-title>
    </main>

    <script src="dist/index.js"></script>
</body>
