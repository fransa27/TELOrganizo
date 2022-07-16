import { StyleSheet, View, Text, TextInput, TouchableHighlight, Button } from 'react-native';
import React, {Component, useState} from 'react';

class RegisterForm extends Component{
    constructor(){
        super()
        this.state={
            nombre: '',
            psw: '',
            id_familia: '',
            rol: ''
        }
    }
    render (){
        return(
            <View style={styles.container}>
                <TextInput 
                    placeholder='Nombre Usuario'
                    value={this.state.nombre}
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Contraseña'
                    value={this.state.psw}
                    style={styles.input}
                />
                <TextInput 
                    placeholder='ID grupo al que te unirás'
                    value={this.state.id_familia}
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Rol'
                    value={this.state.rol}
                    style={styles.input}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({ 
    container:{
        /* flex:1, */
        backgroundColor: '#EBF5FB'
    },
    input:{
        /* backgroundColor: '#F9E79F', */
        borderColor: '#AEB6BF',
        height: 50,
    },
    
})

export default RegisterForm