const express = require('express');
const path = require('path');
const app = express();
const apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static assets
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home route
app.get('/', (req, res) => {
  res.render('scoreboard', { playerName: 'Anon' });
});

app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Tic‑Tac‑Toe vulnerable app listening on port ${PORT}`);
});