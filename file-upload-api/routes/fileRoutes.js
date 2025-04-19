const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fileController = require("../controllers/fileController");
const auth = require("../middleware/auth");

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

// Routes
router.post("/upload", auth, upload.single("file"), fileController.uploadFile);
router.get("/", auth, fileController.listFiles);
router.get("/download/:filename", auth, fileController.downloadFile);
router.delete("/delete/:filename", auth, fileController.deleteFile);

module.exports = router;
