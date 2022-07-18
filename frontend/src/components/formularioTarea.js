import { StyleSheet, View, Text, TextInput, TouchableHighlight, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, {Component, useState} from 'react';
import { createTask } from '../calls/api';
const FormularioTarea = () => {
    
    const [task, setTask] = useState({
        nombre_tarea:'',
        id_usuario:''
    })
    const handleChange = (name, value) =>{
        setTask({...task, [name]: value})
    }

    const handleSubmit = () =>{
        createTask(task)
        
    }

    return(
        <View style={styles.box1}>
            <Text style={styles.sectionTitle} >Crea una tarea</Text>
            <TextInput 
                placeholder='Nombre Tarea'
                onEndEditing={text=> handleChange('nombre_tarea',text)}
                style={styles.input}
            /> 
            <Picker
                /* selectedValue={selectedValue} */
                style={{ height: 50, width: 150 }}
                /* onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} */
            >
                <Picker.Item label="Usuario 1" /* value="usuario1" */ />
                <Picker.Item label="Usuario 2" /* value="usuario2" */ />
            </Picker>
            <TextInput 
                style={styles.input}
                placeholder='Asignar Tarea'
                onEndEditing={text=> handleChange('id_usuario',text)}

            />

            <TouchableHighlight onPress={handleSubmit()}> 
                <Text>Crear y asignar tarea</Text>
            </TouchableHighlight>
            {/* <Button title='Crear y asignar tarea' onPress={handleSubmit()}/> */}
        </View>

    );


}


const styles = StyleSheet.create({ 
    container:{
        flex:1,
        backgroundColor: '#EBF5FB'
    },
    input:{
        /* backgroundColor: '#F9E79F', */
        width: 200,
        borderWidth:1,
        borderColor: '#2E4053',
        height: 40,
        padding:4        
    },
    box1: {
        marginHorizontal: 10,
        padding: 10,
        /* backgroundColor: 'pink', */
        fontSize: 24,
        borderRadius: 10,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
})

export default FormularioTarea;