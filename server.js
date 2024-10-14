const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // Assurez-vous d'avoir cette ligne

// Définir l'endpoint POST /random
app.post('/random', (req, res) => {
  console.log(req.body); // Affiche la requête reçue dans la console
  res.send('Data received'); // Réponse pour le client
});

// Utiliser le port défini par l'environnement ou 3000 par défaut
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
