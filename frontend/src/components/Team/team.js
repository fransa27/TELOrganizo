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
            <View style={styles.box1}>               
                <TareasEquipo tasks={tareas}/>
            </View>
        )
    
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
    },
    box1: {
        marginHorizontal: 10,
        padding: 10,
        /* backgroundColor: 'pink', */
        fontSize: 24,
        borderRadius: 10,
    }
})
export default Team