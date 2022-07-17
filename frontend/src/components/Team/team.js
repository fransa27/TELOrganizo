import { View,Text, SafeAreaView, FlatList,StyleSheet } from "react-native";
import React , {useState, useEffect}  from 'react';
import axios from 'axios';
import TareasEquipo from "./tareasEquipo";
const Team = () =>{
    //ver el equipo

    /* const [miembros, setMiembro] = useState([])

    const loadTeamMembers = async ()=>{
        const data = await fetch(`http://localhost:4000/usuario`)
        setMiembro(data)
        console.log(data)
    } */
    //render(){
        const [tareas, setTareas] = useState([])
        //const [usuario]
        const loadTeamTasks = async ()=>{    
            const data = await fetch('http://10.0.2.2:4000/tareas')
            const json_data = await data.json()    
            setTareas(json_data)    
        }
        
        useEffect(() => {            
          loadTeamTasks()           
        }, [])

        return(
            <View style={styles.container}>
                <Text style={styles.title}>Tareas equipo</Text>
                
                <TareasEquipo tasks={tareas}/>
            </View>
        )
    //hacer boton para añadir mienbro al equipo
}

const styles = StyleSheet.create({ 
    container:{
        backgroundColor: '#AF7AC5',
        /* flex: 1,
        alignItems: "center",
        justifyContent: "center", */
    },
    title:{
        fontSize: 35,
        fontWeight: "bold"
    }
})
export default Team