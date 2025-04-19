const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const { username, password } = req.body;
  const hashed = bcrypt.hashSync(password, 10);

  db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashed], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ msg: "User registered" });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  db.query("SELECT * FROM users WHERE username = ?", [username], (err, results) => {
    if (err || results.length === 0) return res.status(400).json({ msg: "User not found" });

    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  });
};
