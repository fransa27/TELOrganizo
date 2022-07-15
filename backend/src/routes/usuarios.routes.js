const { Router } = require('express');
//const { TurboModuleRegistry } = require('react-native');
const pool =require('../db')
const rou2 = Router();
const {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    getAllUsersFamily
    
    
} = require('../controllers/usuarios.controllers') //../controllers/usuarios.controllers'

rou2.get('/usuarios', getAllUsers)
rou2.get('/usuarios/:id', getUser)
rou2.get('/usuarios/familia/:id', getAllUsersFamily)
rou2.post('/usuarios',createUser)
rou2.delete('/usuarios/:id',deleteUser)
rou2.put('/usuarios/:id',updateUser)

module.exports = rou2;