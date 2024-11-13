const express = require('express');
const router = express.Router();
const connection = require('../db/db');

router.get('/', (req, res) => {
  connection.query('SELECT * FROM tarea', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { titulo, recordatorio, activa } = req.body;
  connection.query(
    'INSERT INTO tarea (titulo, recordatorio, activa) VALUES (?, ?, ?)',
    [titulo, recordatorio, activa],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json({ id: results.insertId, titulo, recordatorio, activa });
    }
  );
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, recordatorio, activa } = req.body;
  connection.query(
    'UPDATE tarea SET titulo = ?, recordatorio = ?, activa = ? WHERE id = ?',
    [titulo, recordatorio, activa, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ mensaje: 'Tarea actualizada' });
    }
  );
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM tarea WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ mensaje: 'Tarea eliminada' });
  });
});

module.exports = router;