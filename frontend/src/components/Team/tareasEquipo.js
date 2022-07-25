import React , {Component}  from 'react';
import {  Text, FlatList, StyleSheet, View  } from 'react-native'


const TareasEquipo = ({tasks}) => {
  return (
    <View style={styles.container}>
         
        <View style={styles.box1}>
            <Text style={styles.title}>Tareas Equipo</Text>
            {/* <Text>Tareas grupo</Text> */}
            <FlatList
                data={tasks}
                renderItem={({item})=>{
                    return <Text>{item.nombre_tarea}</Text>
                }}
            />
        </View>
    </View>

    
        
    )
}



const styles = StyleSheet.create({ 
    container:{
        /* backgroundColor: '#E8DAEF', */
        
    },
    title:{
        fontSize: 20,
        fontWeight: "bold"
    },
    box1: {
        marginHorizontal: 10,
        marginTop: 10,
        marginEnd:10,
        padding: 30,
        backgroundColor: '#D5F2E5',
        fontSize: 24,
        borderRadius: 10,
    },
})

export default TareasEquipo;