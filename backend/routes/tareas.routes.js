const { Router } = require('express');
//const { TurboModuleRegistry } = require('react-native');
const pool =require('../db')
const rou = Router();
const {
    
    getAllTasks, 
    getTask, 
    createTask, 
    deleteTask, 
    updateTask
} = require('../controllers/tareas.controllers')

rou.get('/tareas', getAllTasks)
rou.get('/tareas/:id', getTask)
rou.post('/tareas',createTask)
rou.delete('/tareas/:id',deleteTask)
rou.put('/tareas/:id',updateTask)

module.exports = rou;