import { StyleSheet,
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Button, 
    SafeAreaView,
    Modal } from 'react-native';
import React, {Component} from 'react';
import RegisterForm from './registerForm';
class Login extends Component{
    constructor(){
        super()
        this.data={
            nombre: '',
            psw: ''  
        }
    }
    /* data = {
        usuario: '',
        psw:''
    } */
    state = {
        modal: false
    }

    setModal = (visible) => {
        this.setState({ modal: visible });
    }
    render(){
        const {modal}=this.state
        /* const {data}=this.data */
        /* const data = {
            usuario: '',
            psw:''
        } */
        return(
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        Bienvenido!
                    </Text>
                    <Text>
                        Ingresa aquí
                    </Text>
                </View>
    
                <View style={styles.form}>
                    <TextInput 
                        placeholder='Ingrese usuario'
                        value={this.data.usuario}
                    />
                    <TextInput 
                        /* secureTextEntry={true} */
                        placeholder='Ingrese contraseña'
                        value={this.data.psw}
                        
                    />
                    <Button title='Ingresar' style={styles.button}/>
                    <View>
                        <TouchableOpacity onPress={()=>this.setModal(true)}>
                            <Text>
                                ¿No tienes cuenta? Registrate!
                            </Text> 
                        </TouchableOpacity>
                    </View>
                    
                    
                </View>
                <Modal
                    transparent={true}
                    visible={modal}
                    onRequestClose={() => {
                        this.setModal(!modal);
                    }}
                >
                    <View style={styles.modalView}>
                        <RegisterForm />                        
                        <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => this.setModal(!modal)}
                        >
                        <Text>Cerrar</Text>
                        </TouchableOpacity>
                        <Button title='Enviar'/>
                    </View>

                </Modal>
                
            </SafeAreaView>
        )
    }

    
}


const styles = StyleSheet.create({ 
    container:{
        backgroundColor: '#E1F6CC',
        /* flex: 1,
        flexDirection: 'column', */
        /* alignItems: "center", */
        justifyContent: "center",
        paddingHorizontal: 10
    },
    title:{
        textAlign: 'center',
        fontFamily: 'cursive',
        fontSize: 50,
        alignItems: "center",
    },
    form:{
        fontSize:5,

    },
    button:{
        backgroundColor:'#60E8EF',
        alignItems: "center",
    },
    registrer:{

    }
})

export default Login