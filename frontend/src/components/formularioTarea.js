import { StyleSheet, View, Text, TextInput, TouchableHighlight, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, {Component, useState} from 'react';

class FormularioTarea extends Component{
    
    constructor(){
        super()
        this.state={
            nombre: '',
            encargado: ''
        }
    }
    render (){

        return(
            <View >
                <TextInput 
                    placeholder='Nombre Tarea'
                    value={this.state.nombre}
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
                {/* <TextInput 
                    style={styles.input}
                    placeholder='Asignar Tarea'
                    value={this.state.encargado}
                /> */}

                {/* <TouchableHighlight> 
                    <Text>Crear y asignar tarea</Text>
                </TouchableHighlight> */}
                <Button title='Crear y asignar tarea' />
            </View>

        );
    }

}


const styles = StyleSheet.create({ 
    container:{
        flex:1,
        backgroundColor: '#EBF5FB'
    },
    input:{
        /* backgroundColor: '#F9E79F', */
        borderColor: '#AEB6BF',
        height: 40,
    },
    
})

export default FormularioTarea;