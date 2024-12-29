// Import necessary modules
import multer from "multer";
import path from "path";
import { validationResult } from "express-validator";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the absolute path to the 'uploads' directory in your root server folder
const uploadDir = path.resolve(__dirname, "../uploads"); // Going one directory up to reach 'uploads'

// Ensure the uploads directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true }); // Create the uploads folder if it doesn't exist
}

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Use the absolute path for 'uploads'
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (!ext) {
      const mimeType = file.mimetype;
      let defaultExt = "";

      if (mimeType === "image/jpeg") {
        defaultExt = ".jpg";
      } else if (mimeType === "image/png") {
        defaultExt = ".png";
      } else if (mimeType === "image/gif") {
        defaultExt = ".gif";
      } else {
        return cb(new Error("Unsupported file type"), false);
      }

      const filename = `${Date.now()}${defaultExt}`;
      cb(null, filename);
    } else {
      const filename = `${Date.now()}${ext}`;
      cb(null, filename);
    }
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error("Unsupported file type"), false);
  }
  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
});

// Export the upload middleware to be used in the route
export { upload };
