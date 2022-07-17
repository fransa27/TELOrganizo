import React , {Component}  from 'react';
import {  Text, FlatList, StyleSheet  } from 'react-native'


const TareasEquipo = ({tasks}) => {
  return (
    <FlatList
        data={tasks}
        renderItem={({item})=>{
            return <Text>{item.nombre_tarea}</Text>
        }}
    />
  )
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