
<?php
require 'db.php';


// Récupération des avis approuvés
$stmt = $pdo->query('SELECT * FROM reviews WHERE approved = 1');
$reviews = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Zoo - Accueil</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
  <section id="avis">
            <h2>Avis</h2>
            <div id="avis-list">
                <?php foreach ($reviews as $review): ?>
                    <p><strong><?php echo htmlspecialchars($review['username']); ?>:</strong> <?php echo htmlspecialchars($review['review']); ?></p>
                <?php endforeach; ?>
            </div>
        </section>

    </main>
    <footer>
        <p>&copy; 2024 Zoo</p>
    </footer>
</body>
</html>