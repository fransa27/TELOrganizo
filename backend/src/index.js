const express = require('express');
const morgan = require('morgan');
//import taskRoutes from './routes/tareas.routes'
const taskRoutes = require('../src/routes/tareas.routes');
const usuariosRoutes = require('../src/routes/usuarios.routes');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(taskRoutes);
app.use(usuariosRoutes);
app.listen(4000);
console.log('Server on port 4000');
