const { Router } = require('express');
//const { TurboModuleRegistry } = require('react-native');
const pool =require('../db')
const rou = Router();
const {
    
    getAllTasks, 
    getTask, 
    createTask, 
    deleteTask, 
    updateTask,
    getTaskUser,
    getAllTasksperUser
} = require('../controllers/tareas.controllers')    //controllers/tareas.controllers'

rou.get('/tareas', getAllTasks)
rou.get('/tareas/usuario/:id_usuario', getAllTasksperUser)
rou.get('/tareas/:id', getTask)
rou.get('/tareas/:id_tarea/usuario/:id_usuario', getTaskUser)
rou.post('/tareas',createTask)
rou.delete('/tareas/:id',deleteTask)
rou.put('/tareas/:id',updateTask)

module.exports = rou;