const express = require('express');
const UserController = require('./user.controller');
const multer = require('multer');
const router = express.Router();

const storage = multer.memoryStorage(); // Stockage en mémoire pour les fichiers
const upload = multer({ storage: storage });

// Endpoint pour créer un utilisateur
router.get('/', (req,res)=>{
    res.status(200).json({ message:"Hello, World!" });
});

// Endpoint pour créer un utilisateur
router.post('/users',upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'projects', maxCount: 5 }]), UserController.createUser);

// Endpoint pour récupérer la liste de tous les utilisateurs
router.get('/users', UserController.getAllUsers);

// Endpoint pour récupérer les détails d'un utilisateur par son ID
router.get('/users/:userId', UserController.getUserById);

// Endpoint pour rendre un fichier
router.get('/browse-files/:fileId', UserController.getFile);

module.exports = router;
