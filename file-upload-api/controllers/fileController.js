const fs = require("fs");
const path = require("path");

exports.uploadFile = (req, res) => {
  if (!req.file) return res.status(400).json({ msg: "No file uploaded" });
  res.json({ filename: req.file.filename, msg: "File uploaded successfully" });
};

exports.listFiles = (req, res) => {
  const directoryPath = path.join(__dirname, "../uploads");

  fs.readdir(directoryPath, (err, files) => {
    if (err) return res.status(500).json({ msg: "Unable to scan files" });
    res.json(files);
  });
};

exports.downloadFile = (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "../uploads", filename);
  res.download(filePath);
};

exports.deleteFile = (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "../uploads", filename);

  fs.unlink(filePath, (err) => {
    if (err) return res.status(500).json({ msg: "File not found or cannot delete" });
    res.json({ msg: "File deleted successfully" });
  });
};
