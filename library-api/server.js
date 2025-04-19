const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("📚 Library API is running successfully!");
  });
  
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
