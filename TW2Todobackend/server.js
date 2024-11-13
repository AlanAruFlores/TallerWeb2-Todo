const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./db/db');
const DB_PORT_BACK = process.env.DB_PORT_BACK;

app.use(express.json());

app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/api/tarea', require('./routes/tarea'));

app.listen(DB_PORT_BACK, () => {
  console.log(`Servidor levantado en http://localhost:${DB_PORT_BACK}/api/tarea`);
});