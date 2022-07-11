import React from 'react';
import {
    Button,
    View,
    Modal,
    Text, TouchableOpacity, StyleSheet
 } from 'react-native';
import FormularioTarea from './formularioTarea';
class Tarea extends React.Component {
    state = {
        modal: false
    };

    setModal = (visible) => {
        this.setState({ modal: visible });
    }
    render() {
        const {modal}=this.state;
        return(
            <View>
                <Modal
                    transparent={true}
                    visible={modal}
                    onRequestClose={() => {
                        this.setModal(!modal);
                    }}
                >
                    <View style={styles.modalView}>
                        {/* <Text> Hola</Text> */}
                        <FormularioTarea />

                        <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => this.setModal(!modal)}
                        >
                        <Text>Cerrar</Text>
                        </TouchableOpacity>
                    </View>

                </Modal>
                <Button style={styles.button}
                    title='Crear Tarea'
                    onPress={()=> this.setModal(true)}
                />
            </View>
        );
    }    
}

const styles = StyleSheet.create({ 
    container:{
        flex: 8,
        flexDirection: 'column',
        marginHorizontal: 10   ,
        marginTop: 5
    },
    modalView: {
        margin: 20,
        backgroundColor: "#eff8fa",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },buttonClose: {
        backgroundColor: "#F1948A",
    },
})

export default Tarea;