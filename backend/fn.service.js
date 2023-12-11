const axios = require('axios');
const crypto = require('crypto');

const FILE_NEST_BASE_URL = process.env.FILE_NEST_BASE_URL;
const HMAC_SECRET = process.env.HMAC_SECRET;

class FileNestService {
  static async signRequest(data) {
    const signature = crypto.createHmac('sha256', HMAC_SECRET).update(data).digest('hex');
    return signature;
  }

  static async uploadFile(filename, buffer) {
    try {
      const payload = { filename, content: buffer.toString('base64') };
      const signature = await this.signRequest(JSON.stringify(payload));
      const response = await axios.post(`${FILE_NEST_BASE_URL}/files`, payload,{
        headers: {
          'x-hmac-signature':signature
        }
      });
      return response.data.fileId;
    } catch (error) {
      throw new Error('Erreur lors de l\'upload du fichier sur File Nest');
    }
  }

  static async getFileData(fileId) {
    try {
      const signatureString = `GET/${fileId}`;
      const signature = await this.signRequest(signatureString);
      const response = await axios.get(`${FILE_NEST_BASE_URL}/files/${fileId}`, {
        headers: {
          'x-hmac-signature': signature,
        },
      });

      const { metadata, content } = response.data;
      return {
        mimeType: metadata.type,
        content: Buffer.from(content, 'base64'),
      };
    } catch (error) {
      throw new Error('Erreur lors de la récupération du fichier depuis File Nest');
    }
  }
};

module.exports = FileNestService;
