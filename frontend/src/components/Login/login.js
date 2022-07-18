import { StyleSheet,
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Button, 
    SafeAreaView,
    Modal } from 'react-native';
import {Component} from 'react';
import * as React from 'react';
import RegisterForm from './registerForm';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

/* import CrearTarea from '../CrearTareas';
import TareasEquipo from '../Team/tareasEquipo';
import TareasPersonales from '../tareasPersonales';
import Team from '../Team/team'; */
import Menu from '../menu'

const Stack = createStackNavigator()
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
        modal: false,
        visible: false
        
    }

    phasenModalHandler = () => {
        this.setState(({ visible }) => ({ visible: !visible }));
    };

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
                        <Text style={styles.titleSection}>
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

                        <Button title="Ingresar" buttonStyle={styles.button} onPress={this.phasenModalHandler}/>
                        {this.state.visible && <Menu/>}
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

    },
    titleSection:{
        fontSize: 20,
        fontWeight: "bold"
    }
    
})

export default Login