require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ApiRoutes = require("./routes");
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour analyser le corps des requêtes en JSON
app.use(bodyParser.json());

// On va autoriser tous les origins
app.use(cors({origin: '*'}));

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/file-nest-usage-example');
const db = mongoose.connection;

// Gestion des erreurs de connexion à la base de données    
db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données:'));
db.once('open', () => {
  console.log('Connexion à la base de données établie');
});

// Utilisation des routes définies dans le fichier route.js
app.use('/api', ApiRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
