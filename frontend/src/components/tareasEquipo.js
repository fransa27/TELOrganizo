import React , {Component}  from 'react';
import { View,Text, StyleSheet} from 'react-native';

class TareasEquipo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.box1}>
                    <Text style={styles.title}>Tareas equipo</Text>
                    <Text>Tareas grupo </Text>
                </View>
            </View>
        )
    }
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