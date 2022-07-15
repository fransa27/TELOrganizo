import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ListaTareas = ({tasks}) => {
  return (
    <FlatList
        data={tasks}
        renderItem={({item})=>{
            return <Text>{item.nombre_tarea}</Text>
        }}
    />
  )
}

export default ListaTareas