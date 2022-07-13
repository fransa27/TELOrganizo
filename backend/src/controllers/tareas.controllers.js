const pool =require('../db')

const getAllTasks = async (req,res)=>{
    try {
        const allTasks = await pool.query('SELECT * FROM tarea')
        //console.log(allTasks)
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message)
    }

}

const getTask = async (req,res)=>{
    
    try {
        const {id}=req.params
        const result = await pool.query('SELECT * FROM tarea WHERE id_tarea =$1',[id])
        if (result.rows.length === 0)
            return res.status(404).json({ message: "Tarea no encontrada" });
        
        return res.json(result.rows[0])
    } catch (error) {
        console.log(error.message)
    }
    
}

const createTask=async (req,res)=>{
    const {nombre_tarea,id_usuario_tarea,realizada}=req.body
    try {
        const result = await pool.query('INSERT INTO tarea(nombre_tarea,id_usuario_tarea,realizada) VALUES ($1,$2,$3) RETURNING *',
        [nombre_tarea,id_usuario_tarea,realizada])
        //console.log(result)
        //res.send('Creando nueva tarea');
        res.json(result.rows[0])
            
    } catch (error) {
        //console.log(error.message)
        res.json({error: error.message})
    }
}

const deleteTask= async (req,res)=>{
    try {
        const {id}=req.params
        const result = await pool.query('DELETE FROM tarea WHERE id_tarea =$1',[id])
        if (result.rowCount === 0)
            return res.status(404).json({ message: "Tarea no encontrada" });
        
        return res.sendStatus(204)
    } catch (error) {
        console.log(error.message)
    }
}

const updateTask= async (req,res)=>{
    try {
        const {id}=req.params
        const {nombre_tarea,id_usuario_tarea,realizada}=req.body
        const result = await pool.query('UPDATE tarea SET nombre_tarea=$1,id_usuario_tarea=$2,realizada=$3 WHERE id_tarea =$4 RETURNING *',[nombre_tarea,id_usuario_tarea,realizada,id])
        if (result.rows.length === 0)
            return res.status(404).json({ message: "Tarea no encontrada" });
        
        return res.json(result.rows[0])
    } catch (error) {
        console.log(error.message)
    }
}
module.exports={getAllTasks, getTask,createTask,deleteTask,updateTask}