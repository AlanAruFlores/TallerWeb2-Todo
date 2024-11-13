-- Crear la base de datos
CREATE DATABASE db_tareas;

-- Usar la base de datos
USE db_tareas;

-- Crear la tabla 'tarea'
CREATE TABLE tarea (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    recordatorio TEXT,
    activa BOOLEAN DEFAULT TRUE
);