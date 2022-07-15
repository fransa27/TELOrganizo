const pool =require('../db')

const getAllUsers = async (req,res)=>{
    try {
        const allUsers = await pool.query('SELECT * FROM usuario')
        //console.log(allTasks)
        res.json(allUsers.rows)
    } catch (error) {
        console.log(error.message)
    }

}

const getAllUsersFamily = async (req,res)=>{
    
    try {
        const {id}=req.params
        const result = await pool.query('SELECT * FROM usuario WHERE id_familia =$1',[id])
        if (result.rows.length === 0)
            return res.status(404).json({ message: "Usuario no encontrado" });
        
        return res.json(result.rows[0])
    } catch (error) {
        console.log(error.message)
    }
    
}

const getUser = async (req,res)=>{
    
    try {
        const {id}=req.params
        const result = await pool.query('SELECT * FROM usuario WHERE id_usuario =$1',[id])
        if (result.rows.length === 0)
            return res.status(404).json({ message: "Usuario no encontrado" });
        
        return res.json(result.rows[0])
    } catch (error) {
        console.log(error.message)
    }
    
}

const createUser=async (req,res)=>{
    const {nombre,passwd,id_familia,rol}=req.body
    try {
        const result = await pool.query('INSERT INTO usuario(nombre,passwd,id_familia,rol) VALUES ($1,$2,$3,$4) RETURNING *',
        [nombre,passwd,id_familia,rol])
        //console.log(result)
        //res.send('Creando nueva tarea');
        res.json(result.rows[0])
            
    } catch (error) {
        //console.log(error.message)
        res.json({error: error.message})
    }
}

const deleteUser= async (req,res)=>{
    try {
        const {id}=req.params
        const result = await pool.query('DELETE FROM usuario WHERE id_usuario =$1',[id])
        if (result.rowCount === 0)
            return res.status(404).json({ message: "Usuario no encontrado" });
        
        return res.sendStatus(204)
    } catch (error) {
        console.log(error.message)
    }
}

const updateUser= async (req,res)=>{
    try {
        const {id}=req.params
        const {nombre,passwd,id_familia,rol}=req.body
        const result = await pool.query('UPDATE usuario SET nombre=$1,passwd=$2,id_familia=$3,rol=$4 WHERE id_usuario =$5 RETURNING *',[nombre,passwd,id_familia,rol,id])
        if (result.rows.length === 0)
            return res.status(404).json({ message: "Usuario no encontrado" });
        
        return res.json(result.rows[0])
    } catch (error) {
        console.log(error.message)
    }
}
module.exports={getAllUsersFamily,getAllUsers, getUser,createUser,deleteUser,updateUser,getAllUsersFamily}