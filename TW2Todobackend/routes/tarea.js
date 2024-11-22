const express = require('express');
const router = express.Router();
const connection = require('../db/db');

router.get('/', (req, res) => {
  console.log("Peticion '/'");
  connection.query('SELECT * FROM tarea', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM tarea WHERE id = ?',[id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});


router.post('/', (req, res) => {
  const { titulo, descripcion, activa } = req.body;
  connection.query(
    'INSERT INTO tarea (titulo, descripcion, activa) VALUES (?, ?, ?)',
    [titulo, descripcion, activa],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json({ id: results.insertId, titulo, descripcion, activa });
    }
  );
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, activa } = req.body;
  connection.query(
    'UPDATE tarea SET titulo = ?, descripcion = ?, activa = ? WHERE id = ?',
    [titulo, descripcion, activa, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ mensaje: 'Tarea actualizada' });
    }
  );
});

router.get('/activas', (req, res) => {
  console.log("Peticion: '/activas'");
  connection.query('SELECT * FROM tarea WHERE activa = 1', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.get('/inactivas', (req, res) => {
  console.log("Peticion: '/inactivas'");
  connection.query('SELECT * FROM tarea WHERE activa = 0', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.put('/:id/inactivar', (req, res) => {
  const { id } = req.params;
  connection.query(
    'UPDATE tarea SET activa = 0 WHERE id = ?',
    [id],
    (err, results) => {
      if (err) return res.status(500).send(err);

      if (results.affectedRows === 0) {
        return res.status(404).json({ mensaje: 'Tarea no encontrada' });
      }

      res.json({ mensaje: 'Tarea completada exitosamente' });
    }
  );
});

router.put('/:id/activar', (req, res) => {
  const { id } = req.params;
  connection.query(
    'UPDATE tarea SET activa = 1 WHERE id = ?',
    [id],
    (err, results) => {
      if (err) return res.status(500).send(err);

      if (results.affectedRows === 0) {
        return res.status(404).json({ mensaje: 'Tarea no encontrada' });
      }

      res.json({ mensaje: 'Tarea completada exitosamente' });
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
