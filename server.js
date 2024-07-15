const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: '',
  port: '3306',
  user: 'newusername',
  password: 'password',
  database: 'your_database'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// API endpoint to receive data
app.post('/api/submit', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).send('Name is required');
  }

  const query = 'INSERT INTO your_table (name) VALUES (?)';
  db.query(query, [name], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Server error');
    }

    res.send('ok i received');
  });
});

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Backend Server!</h1><p>This is a custom message.</p>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
