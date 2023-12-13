# FileNest Usage Example

This project demonstrates the usage of FileNest, a secure and user-friendly file storage service. FileNest allows you to store and retrieve files securely, offering advanced features such as HMAC signature management to ensure data integrity.

## Demo Video

[Watch the demo video](https://www.youtube.com/@raoufcode) for a visual presentation of FileNest and its usage in this example.

## Prerequisites

Make sure you have Node.js and npm installed on your machine before starting. Don't forget to configure the HMAC secret key in your application's environment file.

```bash
# Example HMAC secret key configuration
HMAC_SECRET=YourSecretKey
```

## Backend (API) ✔️

The backend of this example is built with Node.js, Express, and MongoDB. It uses FileNest for file storage. To set up and run the backend, follow these steps:

1. Navigate to the backend directory.

```bash
cd backend
```

2. Install dependencies.

```bash
npm install
```

3. Start the server.

```bash
npm start
```

The backend will be accessible at http://localhost:5000.

## Frontend (React) ✔️

The frontend is built with React and Tailwind CSS. To set up and run the frontend, follow these steps:

1. Navigate to the frontend directory.

```bash
cd frontend
```

2. Install dependencies.

```bash
npm install
```

3. Start the application.

```bash
npm start
```

The frontend application will be accessible at http://localhost:3000.

---

**Note: File Nest should already be running. Check the FileNest README for more information on how to set it up 👉 [FileNest Readme](https://github.com/fless-lab/file-nest/blob/master/README.md)**

---

## Demonstrated Features

- **File Upload** ✅
- **File Retrieval** ✅
- File Deletion ⏳
- Permanent File Deletion ⏳
- File Restoration ⏳

## Contribute

We actively encourage contributions to this project. If you find issues, bugs, or have improvement suggestions, feel free to open an issue or submit a pull request.

Also, make sure to check out the [FileNest repo](https://github.com/fless-lab/file-nest.git) for more information on this powerful file storage service.