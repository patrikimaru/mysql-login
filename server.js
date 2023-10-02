const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
  origin: 'http://localhost:5000',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('API ni Emy Gaudia');
});

require('./components/users/routes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const db = require('./config/database/sequelize');

db.sequelize.sync({ alter: true }).then(() => {
  console.log('Drop and re-sync db.');
});
