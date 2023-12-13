# FileNest Usage Example

Ce projet démontre l'utilisation de FileNest, un service de stockage de fichiers sécurisé et facile à utiliser. FileNest vous permet de stocker et de récupérer des fichiers en toute sécurité, tout en offrant des fonctionnalités avancées telles que la gestion des signatures HMAC pour garantir l'intégrité des données.

## Vidéo de démonstration

[Regardez la vidéo de démonstration](https://www.youtube.com/@raoufcode) pour une présentation visuelle de FileNest et son utilisation dans cet exemple.

## Prérequis

Assurez-vous d'avoir Node.js et npm installés sur votre machine avant de commencer. N'oubliez pas de configurer la clé secrète HMAC dans le fichier d'environnement de votre application.

```bash
# Exemple de configuration de la clé secrète HMAC
HMAC_SECRET=VotreCleSecrete
```

## Backend (API) ✔️

Le backend de cet exemple est construit avec Node.js, Express, et MongoDB. Il utilise FileNest pour le stockage des fichiers. Pour configurer et exécuter le backend, suivez ces étapes :

1. Accédez au répertoire du backend.

```bash
cd backend
```

2. Installez les dépendances.

```bash
npm install
```

3. Démarrez le serveur.

```bash
npm start
```

Le backend sera accessible à l'adresse http://localhost:5000.

## Frontend (React) ✔️

Le frontend est construit avec React et Tailwind CSS. Pour le configurer et le lancer, procédez comme suit :

1. Accédez au répertoire du frontend.

```bash
cd frontend
```

2. Installez les dépendances.

```bash
npm install
```

3. Démarrez l'application.

```bash
npm start
```

L'application frontend sera accessible à l'adresse http://localhost:3000.

---

**NB : File Nest devra être déjà en cours d'exécution. Consultez le README de FileNest pour en apprendre plus sur comment faire sa mise en place 👉 [FileNest Readme](https://github.com/fless-lab/file-nest/blob/master/README.md)**

---

## Fonctionnalités Démontrées

- **Upload de fichiers** ✅
- **Récupération de fichiers** ✅
- Suppression de fichiers ⏳
- Suppression permanente de fichiers ⏳
- Restauration de fichiers ⏳

## Contribuer

Nous encourageons activement les contributions à ce projet. Si vous trouvez des problèmes, des bogues, ou si vous avez des suggestions d'amélioration, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

N'oubliez pas de consulter également le [repo de FileNest](https://github.com/fless-lab/file-nest.git) pour plus d'informations sur ce puissant service de stockage de fichiers.