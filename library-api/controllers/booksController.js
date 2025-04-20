const db = require("../config/db");

exports.addBook = (req, res) => {
  const { title, author, genre, year } = req.body;
  db.query("INSERT INTO books (title, author, genre, year) VALUES (?, ?, ?, ?)",
    [title, author, genre, year],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ msg: "Book added" });
    });
};

exports.updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author, genre, year } = req.body;
  db.query("UPDATE books SET title=?, author=?, genre=?, year=? WHERE id=?",
    [title, author, genre, year, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ msg: "Book updated" });
    });
};

exports.deleteBook = (req, res) => {
  db.query("DELETE FROM books WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ msg: "Book deleted" });
  });
};

exports.getBooks = (req, res) => {
  const { genre, author, page = 1, limit = 5 } = req.query;
  let sql = "SELECT * FROM books WHERE 1";
  const params = [];

  if (genre) {
    sql += " AND genre=?";
    params.push(genre);
  }
  if (author) {
    sql += " AND author=?";
    params.push(author);
  }

  sql += " LIMIT ? OFFSET ?";
  params.push(+limit, (page - 1) * limit);

  db.query(sql, params, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
