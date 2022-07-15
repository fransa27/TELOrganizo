import React , {Component,useEffect,useState}  from 'react';
import { View,Text, StyleSheet, FlatList} from 'react-native';
import ListaTareas from '../components/listaTareas'
//import {getAllTasks} from '/Users/pancholopez/Documents/1USM/2022-1/TEL335-DAWM/proyecto/TELOrganizo/backend/src/controllers/tareas.controllers'
//class TareasEquipo extends Component{
   /*  const {
    
        getAllTasks, 
        getTask, 
        createTask, 
        deleteTask, 
        updateTask
    } = require('/Users/pancholopez/Documents/1USM/2022-1/TEL335-DAWM/proyecto/TELOrganizo/backend/src/controllers/tareas.controllers')  */
const TareasEquipo = ()=>{
    

    //render(){
        const [tareas, setTareas] = useState([])

        const loadTeamTasks = async ()=>{
            const data = await fetch('http://localhost:4000/tareas')
            setTareas(data)
            console.log(data)
        }
        
        useEffect(() => {
          loadTeamTasks()
        
          
        }, [])
        



        return(
            <View style={styles.container}>
                <Text style={styles.title}>Tareas equipo</Text>
                <Text>Tareas grupo </Text>
                <ListaTareas tasks={tareas}/>
            </View>
        )
    //}
}

const styles = StyleSheet.create({ 
    container:{
        backgroundColor: '#E8DAEF',
        
    },
    title:{
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default TareasEquipo;