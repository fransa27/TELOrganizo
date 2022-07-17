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
                <View style={styles.box1}>
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
    box1: {
        marginHorizontal: 10,
        marginTop: 50,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,
        borderRadius: 10,
    },
    
})

export default FormularioTarea;