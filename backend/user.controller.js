const FileNestSDK = require("file-nest-sdk");
const UserModel = require('./user.model');
const FILE_NEST_BASE_URL = process.env.FILE_NEST_BASE_URL;
const HMAC_SECRET = process.env.HMAC_SECRET;
const fn = new FileNestSDK(FILE_NEST_BASE_URL,HMAC_SECRET);
class UserController {

  static async createUser(req, res) {
    try {
      const { body, files } = req;

      // Envoi de l'avatar à File Nest et récupération de l'id
      const avatarId = await fn.uploadFile(files.avatar[0].buffer);
      
      // Envoi de chaque projet à File Nest et récupération des id correspondants
      const projectIds = await Promise.all(files.projects.map(async (project) => {
        const projectId = await fn.uploadFile(project.buffer);
        return projectId;
      }));

      // Enregistrement de l'utilisateur dans la base de données
      const user = new UserModel({
        ...body,
        avatar: avatarId,
        projects: projectIds,
      });
      await user.save();

      res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
    } catch (error) {
    console.log("error",error)
      res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
    }
  }

  static async getAllUsers(req, res) {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (error) {
      console.log("error",error)
      res.status(500).json({ error: 'Erreur lors de la récupération de la liste des utilisateurs' });
    }
  }

  static async getUserById(req, res) {
    try {
      const { userId } = req.params;
      const user = await UserModel.findById(userId).lean(true).exec();
      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.log("error",error)
      res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
    }
  }


  static async getFile(req, res) {
    try {
      const { fileId } = req.params;
      const fileData = await fn.getFileData(fileId);
  
      res.writeHead(200, {
        'Content-Type': fileData.mimeType,
        'Content-Length': fileData.content.length,
      });
  
      res.end(fileData.content);
    } catch (error) {
      console.log("error",error)
      res.status(error.statusCode || 500).json({ error: 'Erreur lors de la récupération du fichier' });
    }
  }
};

module.exports = UserController;
