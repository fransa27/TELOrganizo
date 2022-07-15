import { View, Text, FlatList } from 'react-native'
import React from 'react'

const listaTareas = () => {
  return (
    <FlatList>
        data_2={tareas}
        renderItem={({item})=>{
            return <Text>{item.nombre_tarea}</Text>
        }}
    </FlatList>
  )
}

export default listaTareas